"use client"
import AuthenticatedScreensHeader from "./AppHeader"
import Sidebar from "./AppSidebar"
import { useState } from "react"

export default function AuthenticatedScreensLayout({ children, pageTitle }) {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className="flex bg-primary-contrast-text h-screen overflow-hidden">
      <div className="h-screen overflow-y-auto min-w-[max-content]">
        <Sidebar show={showSidebar} hideSidebar={() => setShowSidebar(false)} />
      </div>
      <div
        className={`grow ${showSidebar ? "blur-[3px] brightness-[90%]" : ""}`}
      >
        <AuthenticatedScreensHeader
          toggleNavigation={(e) => setShowSidebar((prev) => !prev)}
          heading={pageTitle}
        />
        <div
          className={`${
            showSidebar ? "overflow-hidden" : "overflow-auto"
          } mx-auto flex justify-center items-center h-[calc(100dvh-94px)]`}
        >
          <main className="w-full grow">{children}</main>
        </div>
      </div>
    </div>
  )
}
