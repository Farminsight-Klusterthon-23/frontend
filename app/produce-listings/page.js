"use client"
import AuthenticatedScreensLayout from "../_components/AppLayout"
import { NoProduceDisplay, AddProduceForm } from "./Components"
import { useState, useMemo } from "react"

export default function ProduceListings() {
  const [userProduceList, setUserProduceList] = useState([])
  const [showAddProduceForm, setShowAddProduceForm] = useState(false)
  const hasProduce = useMemo(
    () => userProduceList.length > 0,
    [userProduceList]
  )
  return (
    <AuthenticatedScreensLayout pageTitle="Produce Listing">
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
