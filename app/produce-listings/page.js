"use client"
import AuthenticatedScreensLayout from "../_components/AppLayout"
import { NoProduceDisplay, AddProduceForm, ProduceCard } from "./Components"
import { useState, useMemo, useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  resetSingleProduceInfo,
  updateProduceListings,
  updateLoading,
} from "@/app/_redux/produce"
import useFetch from "@/app/_request/useFetch"
import useRequestErrorHandler from "@/app/_request/useRequestErrorHandler"
import Loader from "@/app/_components/Loader"

export default function ProduceListings() {
  const dispatch = useDispatch()
  const { produceListings, hasFetchedInitial, loading } = useSelector(
    (store) => store.produce
  )
  const [showAddProduceForm, setShowAddProduceForm] = useState(false)
  const hasProduce = useMemo(
    () => produceListings.length > 0,
    [produceListings]
  )

  const { errorHandler } = useRequestErrorHandler()
  const fetchProduceData = useFetch({ method: "GET" })

  const getUserProduceList = useCallback(async () => {
    if (hasFetchedInitial === true) return
    dispatch(updateLoading(true))
    const response = await errorHandler(fetchProduceData)("produce")
    if (!response || response.status !== 200) {
    } else {
      dispatch(updateProduceListings(response.produce))
    }
    dispatch(updateLoading(false))
  }, [dispatch, errorHandler, fetchProduceData, hasFetchedInitial])

  useEffect(() => {
    getUserProduceList()
  }, [getUserProduceList])

  useEffect(() => {
    dispatch(resetSingleProduceInfo())
  }, [dispatch])

  return (
    <AuthenticatedScreensLayout pageTitle="Produce Listings">
      <div className="h-[calc(100dvh-200px)] mt-[-100px] flex flex-col items-center gap-y-[28px] w-[95dvw] sm:w-[98%] max-w-[1122px] mx-auto">
        <div className="w-full">
          <Loader loading={loading} />
          <NoProduceDisplay
            toggleDisplay={() => setShowAddProduceForm(true)}
            show={
              !hasProduce &&
              !showAddProduceForm &&
              !loading &&
              hasFetchedInitial
            }
          />
          <AddProduceForm show={showAddProduceForm && !loading} />
          <ProduceListDisplay
            hide={!hasProduce || showAddProduceForm}
            toggleDisplay={() => setShowAddProduceForm(true)}
            produceList={produceListings}
          />
        </div>
      </div>
    </AuthenticatedScreensLayout>
  )
}

function ProduceListDisplay({ produceList = [], toggleDisplay, hide }) {
  if (hide) return null
  return (
    <section className="w-full">
      <div className="sticky top-0 bg-primary-contrast-text w-full">
        <h1 className="font-montserrat text-[0.875rem] font-[400] mb-[16px]">
          Manage your saved produce here
        </h1>
        <div className="flex justify-between items-center w-full pb-[16px]">
          <button
            onClick={toggleDisplay}
            className="flex justify-center items-center text-center py-[16px] px-[12px] text-base font-[400] text-white rounded-[4px] bg-primary-main"
          >
            Add new Listing
          </button>
          <button className="flex justify-center items-center text-center py-[16px] px-[12px] text-base font-[400] text-black rounded-[4px] bg-[#EBEBEB]">
            Remove a produce
          </button>
        </div>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-[14px] gap-y-[22px]">
        {produceList.map((produce) => (
          <ProduceCard key={produce._id} produce={produce} />
        ))}
      </ul>
    </section>
  )
}
