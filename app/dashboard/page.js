import AuthenticatedScreensLayout from "../_components/AppLayout"
import {
  DeepDiveOptions,
  InternetConnectedTags,
  ChatTextBox,
  SuggestedQuestions,
  ChatBoxContainer
} from "./Components"

export default function DashBoard() {
  return (
    <AuthenticatedScreensLayout pageTitle="Home">
      <div className="flex flex-col items-center gap-y-[28px] w-[95dvw] sm:w-[95%] max-w-[915px] mx-auto">
        <InternetConnectedTags />
        <h1 className="text-center text-[2rem] md:text-[3rem] text-primary-main">
          Welcome to FarmInsight
        </h1>
        <ChatBoxContainer/>
      </div>
    </AuthenticatedScreensLayout>
  )
}
