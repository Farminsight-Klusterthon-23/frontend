"use client";
import {
  SearchIconSvg,
  WeatherSvg,
  AcademicArticlesSvg,
  ProduceInsightsSvg,
  SmallArrowSvg,
} from "./Svgs"
import NextLink from "next/link"
import { useState, useRef, useCallback } from "react"
import { Montserrat } from "next/font/google"
import useOutsideClick from "../_hooks/useOutsideClick"

const montserrat = Montserrat({ subsets: ["latin"] })

export function ChatBoxContainer({ inputValue, onChange, handleSubmit }) {
  return (
    <div className="w-full relative flex items-center flex-col gap-y-[14px]">
      <div className="w-full relative">
        <ChatTextBox
          value={inputValue}
          onChange={onChange}
          handleSubmit={handleSubmit}
        />
        <DeepDiveOptions />
      </div>
      <SuggestedQuestions submitSelection={(value) => onChange(value)} />
    </div>
  )
}

export function ChatTextBox({ value, onChange, handleSubmit }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (value.length < 1) return
        handleSubmit()
      }}
    >
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        title="ask anything"
        placeholder="Ask anything"
        name="question"
        className="min-h-[33dvh] block w-full bg-secondary-contrast-text border border-secondary-dark rounded-[16px] pt-[41px] pb-[51px] px-[27px] text-base text-black font-normal"
      ></textarea>
      <button type="submit" className="absolute right-[12px] text-white font-bold text-center bg-primary-main py-4 px-3 rounded-[14px] bottom-[12px]">
        Ask!
      </button>
    </form>
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
