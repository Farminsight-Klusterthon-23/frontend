"use client"
import { EmailSvg, PasswordSvg } from "../_components/AuthSvgs"
import AuthLayout from "../_components/AuthLayout"
import { AuthInput, AuthSubmitButton } from "../_components/AuthInputs"
import { useState, useEffect, useCallback } from "react"
import useFetch from "../_request/useFetch"
import useRequestErrorHandler from "../_request/useRequestErrorHandler"
import { useRouter } from "next/navigation"

const loginScreenText =
  "Log in to your Farm insight account and pick up right where you left off. Your farm's success story continues with real-time insights, weather updates, and expert advice. Let's grow together!"

export default function Login() {
  const router = useRouter()
  const { error, errorHandler } = useRequestErrorHandler()
  const loginUser = useFetch({ method: "POST" })
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [errorMsg, setErrorMsg] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      const response = await errorHandler(loginUser)("users/login", formData)
      if (response.status !== 200) setErrorMsg(response.message)
      else router.push("/dashboard")
    },
    [errorHandler, formData, loginUser, router]
  )

  useEffect(() => {
    const errMsgTimeout = errorMsg.length > 0 && setTimeout(() => {
      setErrorMsg("")
    }, 4000)
    return () => {
      clearTimeout(errMsgTimeout)
    }
  }, [errorMsg])

  return (
    <div className="h-screen w-screen bg-primary-main flex items-center justify-around">
      <AuthLayout
        mode="login"
        bodyText={loginScreenText}
        headingText={"Great to see you again!"}
      >
        <div>
          {(errorMsg.length > 0 || error) && (
            <p className="text-red-500 animate-bounce-short text-center px-2 py rounded-sm bg-white/80 mx-auto w-fit mb-4">
              {error?.message || errorMsg}
            </p>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-[16px]">
            <AuthInput
              Icon={EmailSvg}
              inputProps={{
                name: "email",
                placeholder: "Enter your email",
                value: formData.email,
                onChange: handleChange,
                required: true,
                type: "email",
              }}
            />
            <AuthInput
              Icon={PasswordSvg}
              inputProps={{
                name: "password",
                placeholder: "Password",
                value: formData.password,
                onChange: handleChange,
                required: true,
                min: 6,
                type: "password",
              }}
            />
            <AuthSubmitButton>Continue</AuthSubmitButton>
          </form>
        </div>
      </AuthLayout>
    </div>
  )
}
