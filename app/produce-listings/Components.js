"use client"
import { NoListingsSvg, AiSvg } from "./Svgs"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { updateLoading } from "@/app/_redux/produce"
import NextLink from "next/link"

export function NoProduceDisplay({ show, toggleDisplay = () => {} }) {
  if (!show) return null

  return (
    <div className="w-full flex flex-col items-center min-h-[60vh] justify-center">
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
    </div>
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

export function ProduceCard({ produce }) {
  return (
    <article
      className={`rounded-[8px] flex-col flex gap-y-[8px] bg-white max-w-[380px] px-[24px] py-[16px]`}
    >
      <h3 className="text-base font-[600] capitalize text-primary-main">
        {produce.name}
      </h3>
      <ul className="flex flex-col gap-y-[12px] list-bullet text-[0.625rem] font-[300]">
        <li>Temperature: {produce.recommendedTemperature}</li>
        <li>Rainfall: {produce.rainfallRequirement}</li>
        <li>
          Soil: {produce.soilDrainage}
          {produce.soilType}
        </li>
      </ul>
      <NextLink
        className="underline text-[0.75rem]"
        href={`/produce-listings/${produce._id}`}
      >
        View full information
      </NextLink>
    </article>
  )
}

export function ProduceInformation({ produceInfo }) {
  if (!produceInfo) return null
  return (
    <div className="flex flex-wrap lg:grid grid-cols-3 gap-[18px]">
      <WeatherCard produceInfo={produceInfo} />
      <GrowthCard produceInfo={produceInfo} />
      <PestCard produceInfo={produceInfo} />
      <SoilAndEnvironmentCard produceInfo={produceInfo} />
    </div>
  )
}

export function WeatherCard({ produceInfo }) {
  return (
    <ProduceInfoCard
      title="Favourable Weather"
      gridPosition="col-start-1 col-end-2 row-start-1 row-end-2"
    >
      <ul className="list-disc ml-4 px-[24px] text-[0.87rem] font-[300]">
        <li>Temperature: {produceInfo?.recommendedTemperature}</li>
        <li>Rainfall: {produceInfo?.rainfallRequirement}</li>
        <li>Soil: {produceInfo?.soilDrainage}</li>
      </ul>
    </ProduceInfoCard>
  )
}

export function GrowthCard({ produceInfo }) {
  return (
    <ProduceInfoCard
      title="Growth cycle"
      gridPosition="col-start-1 col-end-2 row-start-2 row-end-3"
    >
      <p className="text-primary-main text-base px-[24px] font-[600]">
        Duration
      </p>
      <ul className="list-disc ml-4 px-[24px] text-[0.87rem] font-[300]">
        <li className="text-primary-main text-base font-[600]">
          {produceInfo?.averageTimeToMaturity}
        </li>
        <li className="text-primary-main text-base font-[300]">
          {produceInfo?.lifeCycle}
        </li>
      </ul>
      <p className="w-full p-[8px] mt-[35%] text-left text-[0.7rem] font-[300] text-white min-h-[66px] bg-black">
        Note: -<br />
        {produceInfo?.specialNoteOnHarvest}
      </p>
    </ProduceInfoCard>
  )
}

export function PestCard({ produceInfo }) {
  return (
    <ProduceInfoCard
      title="Pest Management"
      gridPosition="col-start-2 col-end-3 row-start-1 row-end-3 lg:min-h-[547px]"
    >
      <h4 className="px-[24px]">Common Pests</h4>
      <ul className="list-disc ml-4 px-[24px] text-[0.87rem] font-[300]">
        <li>Common Pests: {produceInfo?.commonPests?.toString()}</li>
        <li>Pest Control:{produceInfo?.pestControl?.toString()}</li>
      </ul>
      <h4 className="px-[24px]">Diseases</h4>
      <ul className="list-disc ml-4 px-[24px] text-[0.87rem] font-[300]">
        <li>Major Diseases: {produceInfo?.majorDiseases?.toString()}</li>
        <li>
          Resistant Varieties:
          {produceInfo?.varietesResistantToDisease?.toString()}
        </li>
      </ul>
    </ProduceInfoCard>
  )
}

export function SoilAndEnvironmentCard({ produceInfo }) {
  return (
    <ProduceInfoCard
      title="Soil and Environmental Conditions"
      gridPosition="col-start-3 col-end-4 row-start-1 row-end-3"
    >
      <ol className="px-[24px] text-[0.87rem] font-[300] flex flex-col gap-y-[8px] list-decimal ml-3">
        <li>
          Soil Requirements:
          <ul className="list-disc ml-4 font-[300]">
            <li>Type: {produceInfo?.soilType}</li>
            <li>pH Levels: {produceInfo?.soilPHLevels}</li>
            <li>Drainage: {produceInfo?.soilDrainage}</li>
            <li>Sunlight: {produceInfo?.sunlightRequirement}</li>
          </ul>
        </li>
        <li>
          Climate Suitability:
          <ul className="list-disc ml-4 font-[300]">
            <li>Temperature Range: {produceInfo?.recommendedTemperature}</li>
            <li>Rainfall: {produceInfo?.rainfallRequirement}</li>
            <li>Sunlight: {produceInfo?.sunlightRequirement}</li>
          </ul>
        </li>
      </ol>
    </ProduceInfoCard>
  )
}
function ProduceInfoCard({ title, children, gridPosition }) {
  return (
    <article
      className={`py-[14px] w-fit rounded-[8px] flex-col flex gap-y-[8px] bg-white max-w-[380px] ${gridPosition}`}
    >
      <h3 className="text-base font-[600] capitalize text-primary-main px-[24px]">
        {title}
      </h3>
      <div className="flex flex-col gap-y-[12px]">{children}</div>
    </article>
  )
}
