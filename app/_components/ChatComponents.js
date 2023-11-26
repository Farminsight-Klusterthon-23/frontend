import Image from "next/image";
import { AIAvatar, DefaultUserAvatar } from "./ChatSvgs";

export function AIMessage({ text }) {
  return (
    <blockquote>
      <p>{text}</p>
      <footer>
        <cite>Farminsight AI</cite>
      </footer>
    </blockquote>
  );
}

export function UserMessage({ text, userAvatar = "" }) {
  return (
    <blockquote className="block relative w-full pl-[52px]">
      <p className="px-[1.2rem] py-[1.5rem] text-primary-medium text-[0.875rem]">
        {text}
      </p>
      <footer className="flex items-center justify-center w-[30px] h-[30px] absolute top-[18px] left-0">
        {userAvatar.length > 0 ? (
          <Image width={25} height={25} alt={"your profile image"} />
        ) : (
          <DefaultUserAvatar />
        )}
        <cite className="absolute z-100 right-[1000vw]">Farminsight AI</cite>
      </footer>
    </blockquote>
  );
}

export function Conversation() {
  return <ul></ul>;
}

export function UserQuestion({ text, userAvatar = "" }) {
  return (
    <blockquote className="block relative w-full pl-[52px]">
      <p className="px-[1.2rem] py-[1.5rem] rounded-[14px] border border-[#E2E8F0] text-primary-medium text-[0.875rem]">
        {text}
      </p>
      <footer className="flex items-center justify-center absolute top-[18px] left-0">
        {userAvatar.length > 0 ? (
          <Image
            width={30}
            height={30}
            className="w-[30px] h-[30px] rounded-full"
            alt={"your profile image"}
          />
        ) : (
          <DefaultUserAvatar />
        )}
      </footer>
    </blockquote>
  );
}

export function AIAnswer({ text, loading }) {
  return (
    <blockquote className="relative pl-[52px] background-white">
      <div className="px-[1.4rem] py-[2rem] rounded-[14px] text-primary-medium text-[0.875rem] shadow-ai-chat">
        {loading ? (
          <ThinkingElement />
        ) : (
          text
            .replaceAll(/\d+\./g, "-\n")
            .split("-\n")
            .map((str) => (
              <p key={str} className="pb-3">
                {str}
              </p>
            ))
        )}
      </div>
      <footer className="flex items-center justify-center absolute top-[18px] left-0">
        <cite className="absolute z-100 right-[1000vw]">Farminsight AI</cite>
        <AIAvatar />
      </footer>
    </blockquote>
  );
}

export function ThinkingElement() {
  const dotClassName =
    "block w-[15px] h-[15px] rounded-full bg-primary-main/40 animate-pulse";
  return (
    <div className="flex w-full items-center gap-x-7">
      <span className={dotClassName} />
      <span className={`${dotClassName} delay-[40ms]`} />
      <span className={`${dotClassName} delay-[80ms]`} />
      <span className={`${dotClassName} delay-[120ms]`} />
      <span className={`${dotClassName} delay-[240ms]`} />
      <span className={`${dotClassName} delay-[360ms]`} />
      <span className={`${dotClassName} delay-[480ms]`} />
    </div>
  );
}

export function QuestionAndAnswer({
  question,
  answer,
  resetMode,
  saveOffline,
  loading,
}) {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-y-[24px] w-full">
        <UserQuestion text={question} />
        <AIAnswer text={answer} loading={loading} />
      </div>

      <div className="w-full flex-wrap flex items-center justify-center gap-[24px] my-[24px]">
        <button
          onClick={resetMode}
          className="flex items-center justify-center font-montserrat font-[500] text-[0.875rem] border border-[#E2E8F0] py-[18px] px-[16px] bg-transparent rounded-[45px]"
        >
          Ask another question
        </button>
        <button
          onClick={saveOffline}
          className="flex items-center justify-center font-montserrat font-[500] text-[0.875rem] border border-primary-main py-[18px] px-[16px] text-primary-medium bg-transparent rounded-[45px]"
        >
          Save for offline
        </button>
      </div>
    </section>
  );
}
