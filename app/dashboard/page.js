"use client";
import { useState } from "react";
import AuthenticatedScreensLayout from "../_components/AppLayout";
import { QuestionAndAnswer } from "../_components/ChatComponents";
import { ModeTogglerHeader } from "../_components/OfflineAndChatModeTogglerHeader";
import { ChatBoxContainer } from "./Components";

export default function DashBoard() {
  const messagingEventHandlers = useGenerateEventHandlers(
    messagingEventsList,
    messagingActions
  );
  const socket = useSocketManager({
    namespace: "/messages",
    events: messagingEventsList,
    eventHandlers: messagingEventHandlers,
  });

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
  );
}

function ChatMode() {
  const [hasAskedAQuestion, setHasAskedAQuestion] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const saveOffline = () => {
    console.log("saving offline");
    // get the previous questions and answers from local storage, if the new question is not already in the list, add it, and save it back to local storage, otherwise, do nothing
    const previousQuestionsAndAnswers =
      JSON.parse(localStorage.getItem("previousQuestionsAndAnswers")) || [];
    const newQuestionAndAnswer = { question, answer };
    if (
      previousQuestionsAndAnswers.some(
        (questionAndAnswer) =>
          questionAndAnswer.question === question &&
          questionAndAnswer.answer === answer
      )
    ) {
      alert("Already saved for offline");
      return;
    }
    const newQuestionsAndAnswers = [
      ...previousQuestionsAndAnswers,
      newQuestionAndAnswer,
    ];
    localStorage.setItem(
      "previousQuestionsAndAnswers",
      JSON.stringify(newQuestionsAndAnswers)
    );
    alert("Saved for offline");
    setHasAskedAQuestion(false);
    setQuestion("");
    setAnswer("");
  };

  if (hasAskedAQuestion)
    return (
      <QuestionAndAnswer
        question={questionAsked}
        answer={answerGiven}
        loading={loading}
        saveOffline={saveOffline}
        resetMode={() => {
          setHasAskedAQuestion(false);
          setQuestion("");
          setAnswer("");
        }}
      />
    );
  return (
    <>
      <h1 className="text-center text-[2rem] md:text-[3rem] text-primary-main">
        Welcome to FarmInsight
      </h1>
      <ChatBoxContainer
        handleSubmit={() => {
          setHasAskedAQuestion(true);
          setLoading(true);
        }}
        onChange={setQuestion}
        inputValue={question}
      />
    </>
  );
}
