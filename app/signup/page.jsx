"use client"
import { AuthInput, AuthSubmitButton } from "../_components/AuthInputs"
import AuthLayout from "../_components/AuthLayout"
import { EmailSvg, PasswordSvg } from "../_components/AuthSvgs"
import { useState, useCallback } from "react"
import { useDispatch } from "react-redux"
import { updateEmailAndPassword } from "@/app/_redux/signup"
import { useRouter } from "next/navigation"
import Loader from "../_components/Loader"

const signupScreenText =
  "From ideal planting schedules to precise irrigation strategies, our platform helps you achieve optimal yields and sustainable farming practices."

export default function Signup() {
  const dispatch = useDispatch()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = useCallback(
    (e) => {
      setLoading(true)
      e.preventDefault()
      dispatch(updateEmailAndPassword(formData))
      router.push("/signup/onboarding")
    },
    [formData, dispatch, router]
  )

  return (
    <>
      <Loader loading={loading} />
      <div className="h-screen w-screen bg-primary-main flex items-center justify-around">
        <AuthLayout
          mode="signup"
          bodyText={signupScreenText}
          headingText={"Create your account for personalized farming insights"}
        >
          <div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-y-[16px]"
            >
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
                }}
              />
              <AuthSubmitButton>Continue</AuthSubmitButton>
            </form>
          </div>
        </AuthLayout>
      </div>
    </>
  )
}
