"use client"
import AuthenticatedScreensLayout from "@/app/_components/AppLayout"
import { useState, useEffect, useCallback, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useRouter } from "next/navigation"
import useFetch from "@/app/_request/useFetch"
import useRequestErrorHandler from "@/app/_request/useRequestErrorHandler"
import {
  updateLoading,
  addNewProduceListing,
  removeProduceLisitng,
} from "@/app/_redux/produce"
import {
  PageLoadingSvg,
  DeleteIcon,
  BackArrow,
} from "@/app/produce-listings/Svgs"
import { ProduceInformation } from "../Components"
import NextLink from "next/link"

export default function ProducePage() {
  const params = useParams()
  const [requestErr, setRequestErr] = useState(null)
  const [shouldDelete, setShouldDelete] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch()
  const { loading, produceListings } = useSelector((store) => store.produce)
  const singleProduceInfo = useMemo(() => {
    return produceListings.find((el) => el?._id === params.produceId)
  }, [params, produceListings])

  const { error, errorHandler } = useRequestErrorHandler()
  const fetchProduceData = useFetch({ method: "GET" })
  const deleteProduceData = useFetch({ method: "DELETE" })

  const getProduceData = useCallback(async () => {
    !loading && dispatch(updateLoading(true))
    const response = await errorHandler(fetchProduceData)(
      `produce/${params.produceId}`
    )
    console.log(response, "afjasdfk")
    if (!response || response.status !== 200) {
      setRequestErr(response?.message || "Something went wrong!")
    } else {
      if (response.produce === null) router.push("/produce-listings")
      else dispatch(addNewProduceListing(response.produce))
    }
    dispatch(updateLoading(false))
  }, [
    params.produceId,
    loading,
    dispatch,
    errorHandler,
    fetchProduceData,
    router,
  ])

  const deleteProduce = useCallback(async () => {
    dispatch(updateLoading(true))
    const response = await errorHandler(deleteProduceData)(
      `produce/${params.produceId}`
    )
    if (!response || response.status !== 204) {
      window.alert(
        (response?.message ||
          (error?.message && "An internal server error occurrred!")) +
          " Please try again."
      )
    } else {
      dispatch(removeProduceLisitng(params.produceId))
      window.alert("Produce Information deleted successfully.")
      router.push("/produce-listings")
    }
    dispatch(updateLoading(false))
  }, [
    deleteProduceData,
    dispatch,
    error?.message,
    errorHandler,
    params.produceId,
    router,
  ])

  useEffect(() => {
    !singleProduceInfo && getProduceData()
  }, [getProduceData, singleProduceInfo])

  useEffect(() => {
    const confirm =
      shouldDelete === true ? window.confirm("Are you sure?") : false
    if (confirm) {
      deleteProduce()
      setShouldDelete(false)
    }
  }, [shouldDelete, dispatch, deleteProduce])

  return (
    <AuthenticatedScreensLayout pageTitle="Produce Listing">
      <div className="h-[calc(100dvh-150px)] mt-[-100px] w-[95dvw] sm:w-[95%] max-w-[1105px] mx-auto">
        <section className="flex flex-col w-full gap-y-[16px] ">
          <ProduceHeader
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
      <p className="text-right text-base font-[600]">Loading</p>
    </div>
  )
}

function ProduceHeader({ show, produceName, deleteProduceData }) {
  if (!show) return null
  return (
    <div className="flex sticky top-0 inset-x-0 bg-primary-contrast-text items-center justify-between w-full gap-x-[8px] p-[8px]">
      <NextLink
        href="/produce-listings"
        className="flex items-center gap-x-[8px]"
      >
        <BackArrow />
        Back
      </NextLink>
      <h1 className="font-[600] mr-auto capitalize text-base text-primary-main">
        {produceName}
      </h1>
      <button
        onClick={deleteProduceData}
        className="flex justify-center items-center gap-x-[4px] text-center py-[16px] px-[12px] text-base font-[400]rounded-[4px] bg-[#fee] text-[#E41717]"
      >
        <DeleteIcon /> Delete
      </button>
    </div>
  )
}
