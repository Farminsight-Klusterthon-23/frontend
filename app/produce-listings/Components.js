"use client"
import { NoListingsSvg, AiSvg } from "./Svgs"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { updateLoading } from "@/app/_redux/produce"

export function NoProduceDisplay({ show, toggleDisplay = () => {} }) {
  if (!show) return null

  return (
    <>
      <NoListingsSvg />
      <div className="flex gap-y-[11px] flex-col items-center">
        <h1 className="text-center text-[1.2rem] md:text-[1.6rem] text-primary-main">
          You don&apos;t have any listings added yet!
        </h1>
        <p className="text-base font-[400]">Add a produce to your listing</p>
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

const produceCategoryOptions = [
  "cereal",
  "grain",
  "legume",
  "vegetable",
  "fruit",
  "nut",
  "oilseed",
  "latex",
  "sugar crop",
  "green manure",
  "root and tuber",
]
export function AddProduceForm({ show }) {
  const dispatch = useDispatch()
  const [produceData, setProduceData] = useState({
    name: "",
    category: "",
  })
  const router = useRouter()
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
      <form
        onSubmit={(e) => {
          e.preventDefault()
          dispatch(updateLoading(true))
          router.push(
            `/produce-listings/produce?name=${produceData.name}&category=${produceData.category}`
          )
        }}
        className="flex flex-col w-full gap-y-[32px] text-left"
      >
        <label className="flex flex-col w-full gap-y-[8px]">
          <span className="text-[0.875rem] leading-[1rem] text-black">
            Produce Name
          </span>
          <input
            value={produceData.name}
            onChange={(e) =>
              setProduceData((prev) => ({ ...prev, name: e.target.value }))
            }
            className="rounded-[4px] font-montserrat py-[10px] px-[8px] text-[0.8rem] text-secondary-light border border-primary-main"
            type="text"
            name="produce name"
            placeholder="Add the name of the product here."
          />
        </label>
        <label className="flex flex-col w-full gap-y-[8px]">
          <span className="text-[0.875rem] leading-[1rem] text-black">
            What type of crop is this
          </span>
          <select
            name="category"
            value={produceData.category}
            onChange={(e) =>
              setProduceData((prev) => ({ ...prev, category: e.target.value }))
            }
            className="appearance-none font-montserrat rounded-[4px] py-[10px] px-[8px] text-[0.8rem] text-secondary-light border border-primary-main "
          >
            <option value="">Select type of crop</option>
            {produceCategoryOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          className="flex items-center justify-center gap-x-[4px] text-white bg-primary-main rounded-[4px] py-[16px] px-[12px] w-full hover:scale-[103%] transition-all duration-[300ms]"
        >
          <AiSvg />
          Generate Produce information
        </button>
      </form>
    </section>
  )
}
