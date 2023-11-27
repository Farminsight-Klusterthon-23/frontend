"use client"
import AuthenticatedScreensLayout from "../_components/AppLayout"
import { OfflineDisplay } from "./Components"
import { ModeTogglerHeader } from "../_components/OfflineAndChatModeTogglerHeader"
import { useState, useEffect } from "react"
import { QuestionAndAnswer } from "../_components/ChatComponents"

export default function Offline() {
  const [data, setData] = useState([])
  useEffect(() => {
    const offlineData = JSON.parse(
      localStorage.getItem("offline-questions-and-answers")
    )
    if (Array.isArray(offlineData)) setData(offlineData)
  }, [])

  return (
    <AuthenticatedScreensLayout
      pageTitle="Offline"
      centerChildrenVertically={false}
    >
      <div className="h-[calc(100dvh-150px)] flex flex-col items-center gap-y-[28px] w-[95dvw] sm:w-[95%] max-w-[915px] mx-auto">
        <ModeTogglerHeader currentMode={"offline"} />
        <div className="mt-[10%]">
          <OfflineDisplay show={data.length === 0} />
          <ul>
            {data.map((item, idx) => (
              <li key={idx}>
                <QuestionAndAnswer
                  question={item.question}
                  answer={item.answer}
                  loading={false}
                  showButtons={false}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AuthenticatedScreensLayout>
  )
}
