"use client"
import AuthenticatedScreensLayout from "@/app/_components/AppLayout"
import { useState, useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useSearchParams, useRouter } from "next/navigation"
import useFetch from "@/app/_request/useFetch"
import useRequestErrorHandler from "@/app/_request/useRequestErrorHandler"
import {
  updateLoading,
  updateSingleProduceInfo,
  addNewProduceListing,
} from "@/app/_redux/produce"
import {
  PageLoadingSvg,
  DeleteIcon,
  BackArrow,
} from "@/app/produce-listings/Svgs"

export default function ProducePage() {
  const [requestErr, setRequestErr] = useState(null)
  const [shouldDelete, setShouldDelete] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch()
  const { singleProduceInfo, loading } = useSelector((store) => store.produce)
  const { error, errorHandler } = useRequestErrorHandler()
  const fetchProduceData = useFetch({ method: "GET" })
  const postProduceData = useFetch({ method: "POST" })
  const searchParams = useSearchParams()
  const name = searchParams.get("name")
  const category = searchParams.get("category")

  const getProduceData = useCallback(
    async (produceName) => {
      !loading && dispatch(updateLoading(true))
      const response = await errorHandler(fetchProduceData)(
        `produce/crops/${produceName}`
      )
      if (!response || response.status !== 200) {
        setRequestErr(response?.message || "Something went wrong!")
      } else {
        dispatch(updateSingleProduceInfo(response.data))
      }
      dispatch(updateLoading(false))
    },
    [errorHandler, fetchProduceData, dispatch, loading]
  )

  const saveProduceData = useCallback(async () => {
    dispatch(updateLoading(true))
    const response = await errorHandler(postProduceData)(
      "produce",
      singleProduceInfo
    )
    if (!response || response.status !== 201) {
      window.alert(
        (response?.message ||
          (error?.message && "An internal server error occurrred!")) +
          " Please try again."
      )
    } else {
      dispatch(addNewProduceListing(response.produce))
      window.alert(
        "Produce Information saved successfully. You can manage your produce in the produce listings tab"
      )
    }
    dispatch(updateLoading(false))
  }, [
    dispatch,
    error?.message,
    errorHandler,
    postProduceData,
    singleProduceInfo,
  ])

  useEffect(() => {
    if (name?.length > 0 && category?.length > 0) {
      singleProduceInfo === null && requestErr === null && getProduceData(name)
    } else router.push("/produce-listings")
  }, [name, category, getProduceData, router, singleProduceInfo, requestErr])

  useEffect(() => {
    const confirm =
      shouldDelete === true ? window.confirm("Are you sure?") : false
    if (confirm) {
      router.push("/produce-listings")
    }
  }, [shouldDelete, dispatch, router])

  return (
    <AuthenticatedScreensLayout pageTitle="Produce Listing">
      <div className="h-[calc(100dvh-150px)] mt-[-100px] w-[95dvw] sm:w-[95%] max-w-[1105px] mx-auto">
        <section className="flex flex-col w-full gap-y-[16px] ">
          <ProduceHeader
            saveProduceData={saveProduceData}
            deleteProduceData={() => setShouldDelete(true)}
            show={!loading && singleProduceInfo !== null}
            produceName={singleProduceInfo?.name}
          />
          <LoadingScreen loading={loading} />
          {requestErr}
          {singleProduceInfo && (
            <>
              <h2 className="flex items-center py-[8px] gap-x-[8px] text-[0.875rem] font-[500] font-montserrat">
                Produce type
                <span className="capitalize">
                  {singleProduceInfo?.category}
                </span>
              </h2>
              <ProduceInformation produceInfo={singleProduceInfo} />
            </>
          )}
        </section>
      </div>
    </AuthenticatedScreensLayout>
  )
}

function LoadingScreen({ loading }) {
  if (!loading) return null
  return (
    <div className="lg:pl-[250px] z-[100] bg-white/50 flex flex-col items-center justify-center gap-y-[90px] fixed inset-0 h-screen w-screen">
      <div className="animate-pulse duration-[300ms] ease-in-out">
        <PageLoadingSvg />
      </div>
      <p className="text-right text-base font-[600]">Generating Please wait.</p>
    </div>
  )
}

function ProduceHeader({
  show,
  produceName,
  deleteProduceData,
  saveProduceData,
}) {
  if (!show) return null
  return (
    <div className="flex sticky top-0 inset-x-0 bg-primary-contrast-text items-center justify-between w-full gap-x-[8px] p-[8px]">
      <button
        onClick={deleteProduceData}
        className="flex items-center gap-x-[8px]"
      >
        <BackArrow />
        Back
      </button>
      <h1 className="font-[600] mr-auto capitalize text-base text-primary-main">
        {produceName}
      </h1>
      <div className="min-w-max flex gap-x-[8px]">
        <button
          onClick={deleteProduceData}
          className="flex justify-center items-center gap-x-[4px] text-center py-[16px] px-[12px] text-base font-[400]rounded-[4px] bg-[#fee] text-[#E41717]"
        >
          <DeleteIcon /> Delete
        </button>
        <button
          onClick={saveProduceData}
          className="flex justify-center items-center text-center py-[16px] px-[12px] text-base font-[400] text-white rounded-[4px] bg-primary-main"
        >
          Save Listing
        </button>
      </div>
    </div>
  )
}

function ProduceInformation({ produceInfo }) {
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

function WeatherCard({ produceInfo }) {
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

function GrowthCard({ produceInfo }) {
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

function PestCard({ produceInfo }) {
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

function SoilAndEnvironmentCard({ produceInfo }) {
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
