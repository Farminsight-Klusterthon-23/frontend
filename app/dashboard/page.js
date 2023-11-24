import AuthenticatedScreensLayout from "../_components/AppLayout"
import {
  ChatSvg,
  OfflineSvg,
  SearchIconSvg,
  WeatherSvg,
  AcademicArticlesSvg,
  ProduceInsightsSvg,
} from "./Svgs"
import NextLink from "next/link"

import { Montserrat } from "next/font/google"

const montserrat = Montserrat({ subsets: ["latin"] })

export default function DashBoard() {
  return (
    <AuthenticatedScreensLayout pageTitle="Home">
      <div className="flex flex-col items-center gap-y-[28px] w-[95dvw] sm:w-[95%] max-w-[915px] mx-auto">
        <InternetConnectedTags />
        <h1 className="text-center text-[2rem] md:text-[3rem] text-primary-main">
          Welcome to FarmInsight
        </h1>
        <div className="w-full relative flex items-center flex-col gap-y-[14px]">
          <div className="w-full relative">
            <ChatTextBox />
            <DeepDiveOptions />
          </div>
          <SuggestedQuestions />
        </div>
      </div>
    </AuthenticatedScreensLayout>
  )
}

function ChatTextBox() {
  return (
    <textarea
      title="ask anything"
      placeholder="ask anything"
      name="conversation-starter"
      className="min-h-[33dvh] block w-full bg-secondary-contrast-text border border-secondary-dark rounded-[16px] pt-[41px] pb-[51px] px-[27px] text-base text-black font-normal"
    ></textarea>
  )
}

function DeepDiveOptionItem({ href, Icon, heading, children }) {
  return (
    <li>
      <NextLink href={href} className="flex items-start gap-x-[8px] p-[8px]">
        <span className="grow">{Icon && <Icon />}</span>
        <span className="flex flex-col gap-y-[8px]">
          <span
            role="heading"
            aria-level="4"
            className="text-[0.875rem] leading-[114%]"
          >
            {heading}
          </span>
          <span
            className={`${montserrat.className} text-black leading-[10px] text-[0.5rem]`}
          >
            {children}
          </span>
        </span>
      </NextLink>
    </li>
  )
}

function SampleQuestion({ children }) {
  return (
    <li>
      <button className="text-[0.75rem] py-[4px] px-[8px] text-primary-light font-[400]">
        {children}
      </button>
    </li>
  )
}

function SuggestedQuestions() {
  return (
    <section className="flex items-center flex-col gap-y-[8px] max-w-[714px]">
      <h2 className="py-[4px] text-[0.75rem] flex gap-x-3">
        Sample questions to ask <span>&#10151;</span>
      </h2>
      <ul className="flex flex-wrap items-center justify-center gap-[4px] text-center">
        <SampleQuestion>User-friendly AI interfaces for farmers</SampleQuestion>
        <SampleQuestion>
          What are effective pest control strategies for tomatoes
        </SampleQuestion>
        <SampleQuestion>
          Best methods for soil nutrient management and enrichment
        </SampleQuestion>
        <SampleQuestion>User-friendly AI interfaces for farmers</SampleQuestion>
        <SampleQuestion>User-friendly AI interfaces for farmers</SampleQuestion>
      </ul>
    </section>
  )
}

function DeepDiveOptions() {
  return (
    <div className="absolute bottom-[15px] left-[24px]">
      <button className="flex items-center gap-x-[8px] p-[8px]">
        <SearchIconSvg />
        Deep dive
      </button>
      <ul className="bg-white absolute w-[85dvmin] max-w-[180px] rounded-[5px] flex flex-col items-start gap-y-[4px] shadow-dropdown-menu">
        <DeepDiveOptionItem
          heading="Weather report"
          href="/weather"
          Icon={WeatherSvg}
        >
          Get weather reports and history
        </DeepDiveOptionItem>
        <DeepDiveOptionItem
          heading="Academic Articles"
          href="/articles"
          Icon={AcademicArticlesSvg}
        >
          Get resources from academic platform on researches made regarding the{" "}
        </DeepDiveOptionItem>
        <DeepDiveOptionItem
          heading="Produce insight"
          href="/produce-insights"
          Icon={ProduceInsightsSvg}
        >
          Get insight into market information easily
        </DeepDiveOptionItem>
      </ul>
    </div>
  )
}

function InternetConnectedTags() {
  return (
    <div className="flex items-center justify-center text-[1.125rem] font-700 font-pjs">
      <p
        className={`text-primary-medium bg-white p-3 gap-x-[10px] flex items-center justify-center tag-drop-shadow rounded-[50px] min-w-[174px]`}
      >
        <ChatSvg />
        Chat
      </p>
      <p
        className={`text-primary-medium min-w-[82px] opacity-20  bg-white p-3 gap-x-[10px] flex   justify-center items-center`}
      >
        <OfflineSvg />
        offline
      </p>
    </div>
  )
}
