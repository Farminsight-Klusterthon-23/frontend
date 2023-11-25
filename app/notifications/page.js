"use client"
import AuthenticatedScreensLayout from "../_components/AppLayout"
import { NotificationsDisplay } from "./Components"

export default function Offline() {
  return (
    <AuthenticatedScreensLayout
      pageTitle="Offline"
      centerChildrenVertically={false}
    >
      <div className="h-[calc(100dvh-150px)] flex flex-col items-center gap-y-[28px] w-[95dvw] sm:w-[95%] max-w-[915px] mx-auto">
         <NotificationsDisplay/>
      </div>
    </AuthenticatedScreensLayout>
  )
}
