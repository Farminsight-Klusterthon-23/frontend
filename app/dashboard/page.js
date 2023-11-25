"use client"
import AuthenticatedScreensLayout from "../_components/AppLayout"
import { ChatBoxContainer } from "./Components"
import { ModeTogglerHeader } from "../_components/OfflineAndChatModeTogglerHeader"
import { useState } from "react"
import { QuestionAndAnswer } from "../_components/ChatComponents"

export default function DashBoard() {
  return (
    <AuthenticatedScreensLayout
      pageTitle="Home"
      centerChildrenVertically={false}
    >
      <div className="h-[calc(100dvh-150px)] flex flex-col items-center gap-y-[28px] w-[95dvw] sm:w-[95%] max-w-[915px] mx-auto">
        <ModeTogglerHeader currentMode={"chat"} />
        <ChatMode />
      </div>
    </AuthenticatedScreensLayout>
  )
}

function ChatMode() {
  const [hasAskedAQuestion, setHasAskedAQuestion] = useState(false)
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [loading, setLoading] = useState(false)

  if (hasAskedAQuestion)
    return (
      <QuestionAndAnswer
        question={question}
        answer={answer}
        loading={loading}
        resetMode={() => {
          setHasAskedAQuestion(false)
          setQuestion("")
          setAnswer("")
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
          setHasAskedAQuestion(true)
          setLoading(true)
        }}
        onChange={setQuestion}
        inputValue={question}
      />
    </>
  )
}
