"use client"
import { AuthInput } from "@/app/_components/AuthInputs"
import { UserSvg, ArrowSvg } from "@/app/_components/AuthSvgs"
import { useState, useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateNamesAndLocation } from "@/app/_redux/signup"
import { setUser } from "@/app/_redux/user"
import { useRouter } from "next/navigation"
import Loader from "@/app/_components/Loader"
import { LocationSearchInput } from "./Components"
import useFetch from "@/app/_request/useFetch"
import useRequestErrorHandler from "@/app/_request/useRequestErrorHandler"
import NextLink from "next/link"

export default function OnBoarding() {
  const {
    data: { email, password },
  } = useSelector((store) => store.signup)
  const [loading, setLoading] = useState(false)
  const [formErrors, setFormErrors] = useState({
    location: false,
    firstName: false,
    lastName: false,
  })
  const dispatch = useDispatch()
  const router = useRouter()
  const [errorMsg, setErrorMsg] = useState("")
  const { error, errorHandler } = useRequestErrorHandler()
  const signupUser = useFetch({ method: "POST" })
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    location: null,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormErrors((prev) => ({ ...prev, [name]: false }))
    setErrorMsg("")
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const updateLatLng = (latLng) => {
    setFormData({
      ...formData,
      location: latLng,
    })
  }

  const checkIsFormDataComplete = useCallback((data) => {
    return [
      Object.keys(data).every((key) => Boolean(data[key]) === true),
      Object.keys(data).filter((key) => Boolean(data[key]) === false),
    ]
  }, [])

  const handleSignup = useCallback(
    async (data) => {
      return await errorHandler(signupUser)("users", data)
    },
    [signupUser, errorHandler]
  )

  const handleSubmit = useCallback(
    async (e) => {
      setLoading(true)
      e.preventDefault()
      const [isFormDataComplete, incompleteFields] =
        checkIsFormDataComplete(formData)
      if (!isFormDataComplete) {
        setLoading(false)
        setErrorMsg(
          `Please fill in these fields: ${incompleteFields.join(",")}`
        )
        return setFormErrors((prev) => ({
          ...prev,
          ...incompleteFields.reduce(
            (acc, field) => ({ ...acc, [field]: true }),
            {}
          ),
        }))
      }
      dispatch(updateNamesAndLocation(formData))
      const response = await handleSignup({
        ...formData,
        email,
        password,
        latitude: formData.location.lat,
        longitude: formData.location.lng,
      })
      setLoading(Boolean(response) === true ? false : false)
      if(!response) return 
      if (response.status !== 200) setErrorMsg(response.message)
      else {
        dispatch(setUser(response.user))
        localStorage.setItem(
          process.env.NEXT_PUBLIC_LS_AUTH_KEY,
          response.token
        )
        router.push("/dashboard")
      }
    },
    [
      checkIsFormDataComplete,
      formData,
      dispatch,
      handleSignup,
      email,
      password,
      router,
    ]
  )

  useEffect(() => {
    if (email.length <= 0 || password.length <= 0) router.push("/signup")
  }, [email.length, password.length, router])

  return (
    <>
      <Loader loading={loading} />
      <div className="h-screen w-screen bg-primary-main flex flex-col items-center justify-center gap-y-[25px]">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[562px] flex flex-col gap-y-[16px] px-[1.5rem] md:px-[2rem] py-[2.5rem] bg-[#043023] rounded-[8px]"
        >
          {errorMsg.toLowerCase().includes("duplicate") && (
            <NextLink
              href="/signup"
              type="button"
              className="text-white underline"
            >
              Go back
            </NextLink>
          )}
          <h1 className="text-[2rem] capitalize text-center text-white my-[8px]">
            A few extra things
          </h1>
          {(error || errorMsg) && (
            <p className="text-red-500 animate-bounce-short text-center px-2 py rounded-sm bg-white/80 mx-auto w-fit mb-4">
              {errorMsg || (error !== null && "An internal error occurred!")}
            </p>
          )}
          <AuthInput
            Icon={UserSvg}
            inputProps={{
              name: "firstName",
              placeholder: "First Name",
              value: formData.firstName,
              onChange: handleChange,
              required: true,
              hasError: formErrors.firstName,
              type: "text"
            }}
          />
          <AuthInput
            Icon={UserSvg}
            inputProps={{
              name: "lastName",
              placeholder: "Last Name",
              value: formData.lastName,
              onChange: handleChange,
              required: true,
              hasError: formErrors.lastName,
              type: "text"
            }}
          />
          <div>
            <h2 className="text-[1.1rem] text-center text-white my-[8px]">
              Enter your location
            </h2>
            <LocationSearchInput
              hasError={formErrors.location}
              updateLatLng={updateLatLng}
            />
          </div>
          <button type="submit" className="absolute right-[2000vw] block">
            submit
          </button>
        </form>
        <button
          onClick={handleSubmit}
          className="rounded-[4px] text-white text-center flex items-center gap-x-3 bg-[#008148] px-[16px] py-[8px]"
        >
          Continue <ArrowSvg />
        </button>
      </div>
    </>
  )
}
