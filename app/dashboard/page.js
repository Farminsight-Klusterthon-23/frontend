"use client"
import AuthenticatedScreensLayout from "../_components/AppLayout"
import { ChatBoxContainer } from "./Components"
import { ModeTogglerHeader } from "../_components/OfflineAndChatModeTogglerHeader"
import { useState, useMemo, useCallback } from "react"
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
  const [deepDiveOption, setDeepDiveOption] = useState("")
  const [question, setQuestion] = useState("")
  const hasAskedAQuestion = useMemo(
    () => questionAsked.length > 0,
    [questionAsked.length]
  )
  const dispatch = useDispatch()

  const handleSubmit = useCallback(async () => {
    let questionToAsk = question
    if (deepDiveOption.length > 0) {
      switch (deepDiveOption) {
        case "Weather report":
          questionToAsk = `Format as a Weather Report: ${question}`
          break
        case "Academic Articles":
          questionToAsk = `Format answer as an Academic Article: ${question}`
          break
        case "Produce insight":
          questionToAsk = `Format as a Produce insight: ${question}`
          break
      }
    }
    dispatch(messagingActions.updateLoading(true))
    dispatch(messagingActions.updateQuestionAsked(question))
    socket.emit(messagingEvents.question, { question: questionToAsk })
  }, [deepDiveOption, dispatch, question, socket])

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
        handleSelectOption={(selection) => setDeepDiveOption(selection)}
        handleSubmit={handleSubmit}
        onChange={setQuestion}
        inputValue={question}
        selectedOption={deepDiveOption}
      />
    </>
  )
}
