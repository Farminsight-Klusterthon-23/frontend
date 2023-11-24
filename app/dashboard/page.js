"use client"
import AuthenticatedScreensLayout from "../_components/AppLayout"
import { ModeTags, ChatBoxContainer, OfflineDisplay } from "./Components"
import { useState } from "react"

export default function DashBoard() {
  const [currentModeView, setCurrentModeView] = useState("chat")
  return (
    <AuthenticatedScreensLayout
      pageTitle="Home"
      centerChildrenVertically={false}
    >
      <div className=" min-h-[calc(100dvh-150px)] flex flex-col items-center gap-y-[28px] w-[95dvw] sm:w-[95%] max-w-[915px] mx-auto">
        <div className="sticky top-0">
          <ModeTags
            currentMode={currentModeView}
            toggleCurrentMode={(view) => setCurrentModeView(view)}
          />
        </div>

        {currentModeView === "chat" ? (
          <>
            <h1 className="text-center text-[2rem] md:text-[3rem] text-primary-main">
              Welcome to FarmInsight
            </h1>
            <ChatBoxContainer />
          </>
        ) : (
          <div className="mt-[10%]">
            <OfflineDisplay />
          </div>
        )}
      </div>
    </AuthenticatedScreensLayout>
  )
}
