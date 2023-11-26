"use client"
import AuthenticatedScreensLayout from "../_components/AppLayout"
import { ChatBoxContainer } from "./Components"
import { ModeTogglerHeader } from "../_components/OfflineAndChatModeTogglerHeader"
import { useState, useMemo } from "react"
import { QuestionAndAnswer } from "../_components/ChatComponents"
import useSocketManager from "../_hooks/useSocketManager"
import { messagingEventsList } from "../_socket/events"
import { messagingActions, messagingEvents } from "../_redux/messaging.js"
import useGenerateEventHandlers from "../_hooks/useGenerateEventHandlers"
import { useSelector, useDispatch } from "react-redux"

export default function DashBoard() {
  const messagingEventHandlers = useGenerateEventHandlers(
    messagingEventsList,
    messagingActions
  )
  const socket = useSocketManager({
    namespace: "/messages",
    events: messagingEventsList,
    eventHandlers: messagingEventHandlers,
  })

  return (
    <AuthenticatedScreensLayout
      pageTitle="Home"
      centerChildrenVertically={false}
    >
      <div className="h-[calc(100dvh-150px)] flex flex-col items-center gap-y-[28px] w-[95dvw] sm:w-[95%] max-w-[915px] mx-auto">
        <ModeTogglerHeader currentMode={"chat"} />
        <ChatMode socket={socket} />
      </div>
    </AuthenticatedScreensLayout>
  )
}

function ChatMode({ socket }) {
  const { questionAsked, answerGiven, loading } = useSelector(
    (store) => store.messaging
  )
  const [question, setQuestion] = useState(questionAsked)
  const hasAskedAQuestion = useMemo(
    () => questionAsked.length > 0,
    [questionAsked.length]
  )
  const dispatch = useDispatch()

  if (hasAskedAQuestion)
    return (
      <QuestionAndAnswer
        question={questionAsked}
        answer={answerGiven}
        loading={loading}
        resetMode={() => {
          setQuestion("")
          dispatch(messagingActions.resetQuestionAndAnswer())
        }}
      />
    )
  return (
    <>
      <h1 className="text-center text-[2rem] md:text-[3rem] text-primary-main">
        Welcome to FarmInsight
      </h1>
      <ChatBoxContainer
        handleSubmit={() => {
          socket.emit(messagingEvents.question, { question })
          dispatch(messagingActions.updateLoading(true))
          dispatch(messagingActions.updateQuestionAsked(question))
        }}
        onChange={setQuestion}
        inputValue={question}
      />
    </>
  )
}
