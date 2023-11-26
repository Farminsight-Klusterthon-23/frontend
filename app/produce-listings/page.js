"use client"
import AuthenticatedScreensLayout from "../_components/AppLayout"
import { NoProduceDisplay, AddProduceForm } from "./Components"
import { useState, useMemo, useEffect } from "react"
import { useDispatch } from "react-redux"
import { resetSingleProduceInfo } from "@/app/_redux/produce"

export default function ProduceListings() {
  const dispatch = useDispatch()
  const [userProduceList, setUserProduceList] = useState([])
  const [showAddProduceForm, setShowAddProduceForm] = useState(false)
  const hasProduce = useMemo(
    () => userProduceList.length > 0,
    [userProduceList]
  )
  useEffect(() => {
    dispatch(resetSingleProduceInfo())
  }, [dispatch])
  return (
    <AuthenticatedScreensLayout pageTitle="Produce Listings">
      <div className="mt-[-100px] flex flex-col items-center gap-y-[28px] w-[95dvw] sm:w-[95%] max-w-[915px] mx-auto">
        <NoProduceDisplay
          toggleDisplay={() => setShowAddProduceForm(true)}
          show={!hasProduce && !showAddProduceForm}
        />
        <AddProduceForm
          show={showAddProduceForm && !hasProduce}
          submit={(produce) => setUserProduceList((prev) => [...prev, produce])}
        />
      </div>
    </AuthenticatedScreensLayout>
  )
}
