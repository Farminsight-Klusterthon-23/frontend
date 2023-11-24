"use client"
import {
  ChatSvg,
  OfflineSvg,
  SearchIconSvg,
  WeatherSvg,
  AcademicArticlesSvg,
  ProduceInsightsSvg,
  SmallArrowSvg,
  FileSvg,
} from "./Svgs"
import NextLink from "next/link"
import { useState, useRef, useCallback } from "react"
import { Montserrat } from "next/font/google"
import useOutsideClick from "../_hooks/useOutsideClick"

const montserrat = Montserrat({ subsets: ["latin"] })

export function ChatBoxContainer() {
  const [inputValue, setInputValue] = useState("")
  return (
    <div className="w-full relative flex items-center flex-col gap-y-[14px]">
      <div className="w-full relative">
        <ChatTextBox
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <DeepDiveOptions />
      </div>
      <SuggestedQuestions submitSelection={(value) => setInputValue(value)} />
    </div>
  )
}

export function ChatTextBox({ value, onChange }) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      title="ask anything"
      placeholder="Ask anything"
      name="conversation-starter"
      className="min-h-[33dvh] block w-full bg-secondary-contrast-text border border-secondary-dark rounded-[16px] pt-[41px] pb-[51px] px-[27px] text-base text-black font-normal"
    ></textarea>
  )
}

export function DeepDiveOptionItem({ href, Icon, heading, children }) {
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

export function SampleQuestion({ text, handleSelect }) {
  return (
    <li>
      <button
        onClick={() => handleSelect(text)}
        className="text-[0.75rem] py-[4px] px-[8px] text-primary-light font-[400]"
      >
        {text}
      </button>
    </li>
  )
}

export function SuggestedQuestions({ submitSelection }) {
  const handleSampleQuestionSelection = useCallback(
    (selection) => {
      submitSelection(selection)
    },
    [submitSelection]
  )

  return (
    <section className="flex items-center flex-col gap-y-[8px] max-w-[714px]">
      <h2 className="py-[4px] text-[0.75rem] flex items-center">
        Sample questions to ask{" "}
        <span>
          <SmallArrowSvg />
        </span>
      </h2>
      <ul className="flex flex-wrap items-center justify-center gap-[4px] text-center">
        <SampleQuestion
          handleSelect={handleSampleQuestionSelection}
          text="User-friendly AI interfaces for farmers"
        />
        <SampleQuestion
          handleSelect={handleSampleQuestionSelection}
          text="What are effective pest control strategies for tomatoes"
        />
        <SampleQuestion
          handleSelect={handleSampleQuestionSelection}
          text="Best methods for soil nutrient management and enrichment"
        />
        <SampleQuestion
          handleSelect={handleSampleQuestionSelection}
          text="User-friendly AI interfaces for farmers"
        />
        <SampleQuestion
          handleSelect={handleSampleQuestionSelection}
          text="User-friendly AI interfaces for farmers"
        />
      </ul>
    </section>
  )
}

export function DeepDiveOptions() {
  const [showDropdown, setShowDropDown] = useState(false)
  const dropdownRef = useRef(null)
  useOutsideClick(dropdownRef, () => setShowDropDown(false))

  return (
    <div ref={dropdownRef} className="absolute bottom-[15px] left-[24px]">
      <button
        onClick={() => setShowDropDown((prev) => !prev)}
        className="flex items-center gap-x-[8px] p-[8px] hover:scale-[1.05] transition-all duration-[300ms] ease-in-out"
      >
        <SearchIconSvg />
        Deep dive
      </button>
      <ul
        className={`${
          showDropdown ? "max-h-screen" : "max-h-0"
        } transition-all overflow-hidden duration-[300ms] ease-in-out bg-white absolute w-[85dvmin] max-w-[180px] rounded-[5px] flex flex-col items-start gap-y-[4px] shadow-dropdown-menu`}
      >
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

export function ModeTagBtn({ currentMode, mode, Icon, toggleCurrentMode }) {
  return (
    <button
      onClick={() => toggleCurrentMode(mode)}
      className={`${
        currentMode === mode ? "cursor-default" : "opacity-20 hover:opacity-80"
      } text-primary-medium min-w-[150px] bg-white p-3 gap-x-[15px] flex justify-center items-center rounded-[20px] transition-all duration-[300ms]`}
    >
      <Icon />
      {mode}
    </button>
  )
}

export function ModeTags({ currentMode, toggleCurrentMode }) {
  const buttons = [
    { icon: ChatSvg, name: "chat" },
    { icon: OfflineSvg, name: "offline" },
  ]
  return (
    <div className="flex items-center justify-center text-[1.125rem] font-700 font-pjs">
      {buttons.map((button) => (
        <ModeTagBtn
          key={button.name}
          currentMode={currentMode}
          toggleCurrentMode={toggleCurrentMode}
          Icon={button.icon}
          mode={button.name}
        />
      ))}
    </div>
  )
}

export function OfflineDisplay({ hasOfflineItems }) {
  if (!hasOfflineItems) return <NoOfflineItemsDisplay />
  return <section></section>
}

export function NoOfflineItemsDisplay() {
  return (
    <section className="text-center mx-auto">
      <span className="block mb-[16px] mx-auto w-fit">
        <FileSvg />
      </span>
      <h1 className="font-[600] text-[1.125rem]">
        You dont have any offline content saved yet!
      </h1>
      <p className="font-montserrat font-[400] text-[1.125rem] mb-[8px]">
        Searches you save for later can be found here even without a network.
      </p>
      <button className="bg-primary-main mx-auto text-white text-base py-[16px] px-[12px] rounded-[4px]">
        Start asking questions
      </button>
    </section>
  )
}
