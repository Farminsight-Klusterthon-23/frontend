"use client"
import { NoListingsSvg, AiSvg } from "./Svgs"
import { useState } from "react"

export function NoProduceDisplay({ show, toggleDisplay = () => {} }) {
  if (!show) return null

  return (
    <>
      <NoListingsSvg />
      <div className="flex gap-y-[11px] flex-col items-center">
        <h1 className="text-center text-[1.2rem] md:text-[1.6rem] text-primary-main">
          You don&apos;t have any listings added yet!
        </h1>
        <p className="text-base font-400">Add a product to your listing</p>
        <button
          onClick={toggleDisplay}
          className="bg-primary-main text-white text-base py-[16px] px-[12px] rounded-[4px]"
        >
          Add a produce
        </button>
      </div>
    </>
  )
}

export function AddProduceForm({ show, submit }) {
  const [produceData, setProduceData] = useState()

  if (!show) return null

  return (
    <section className="max-w-[496px] mx-auto text-center">
      <h1 className="text-[1.5rem] md:text-[2rem] text-primary-main mb-[16px]">
        Produce information
      </h1>
      <p
        className={`font-montserrat mb-[30px] text-secondary-light text-[0.875rem]`}
      >
        Our dedicated Product Listing feature allows you to showcase your
        produce, manage listings effortlessly, and connect with a broader
        market.
      </p>
      <form className="flex flex-col w-full gap-y-[32px] text-left">
        <label className="flex flex-col w-full gap-y-[8px]">
          <span className="text-[0.875rem] leading-[1rem] text-black">
            Produce Name
          </span>
          <input
            className="rounded-[4px] font-montserrat py-[10px] px-[8px] text-[0.8rem] text-secondary-light border border-primary-main"
            type="text"
            placeholder="Add the name of the product here."
          />
        </label>
        <label className="flex flex-col w-full gap-y-[8px]">
          <span className="text-[0.875rem] leading-[1rem] text-black">
            What type of crop is this
          </span>
          <select className="appearance-none font-montserrat rounded-[4px] py-[10px] px-[8px] text-[0.8rem] text-secondary-light border border-primary-main ">
            <option>Select type of crop</option>
            <option>cereal</option>
            <option>grain</option>
            <option>legume</option>
            <option>vegetable</option>
            <option>fruit</option>
            <option>nut</option>
            <option>oilseed</option>
            <option>latex</option>
            <option>sugar crop</option>
            <option>green manure</option>
            <option>tuber</option>
          </select>
        </label>
        <button
          type="button"
          className="flex items-center justify-center gap-x-[4px] text-white bg-primary-main rounded-[4px] py-[16px] px-[12px] w-full hover:scale-[103%] transition-all duration-[300ms]"
        >
          <AiSvg />
          Generate Produce information
        </button>
      </form>
    </section>
  )
}
