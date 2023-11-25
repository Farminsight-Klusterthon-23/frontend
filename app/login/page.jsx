"use client"
import { EmailSvg, PasswordSvg } from "../_components/AuthSvgs"
import AuthLayout from "../_components/AuthLayout"
import { AuthInput, AuthSubmitButton } from "../_components/AuthInputs"
import { useState, useCallback } from "react"

const loginScreenText =
  "Log in to your Farm insight account and pick up right where you left off. Your farm's success story continues with real-time insights, weather updates, and expert advice. Let's grow together!"

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    const validationErrors = {}
    if (!formData.email.trim()) {
      validationErrors.email = "email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "email is not valid"
    }

    if (!formData.password.trim()) {
      validationErrors.password = "password is required"
    } else if (formData.password.length < 6) {
      validationErrors.password = "password should be at least 6 char"
    }

    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      alert("form submitted succefully")
    }
  }, [formData.email, formData.password])

  return (
    <div className="h-screen w-screen bg-primary-main flex items-center justify-around">
      <AuthLayout
        mode="login"
        bodyText={loginScreenText}
        headingText={"Great to see you again!"}
      >
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-[16px]">
            <AuthInput
              Icon={EmailSvg}
              inputProps={{
                name: "email",
                placeholder: "Enter your email",
                value: "",
                onChange: handleChange,
                required: true,
              }}
            />
            <AuthInput
              Icon={PasswordSvg}
              inputProps={{
                name: "password",
                placeholder: "Password",
                value: "",
                onChange: handleChange,
                required: true,
              }}
            />
            <AuthSubmitButton>Continue</AuthSubmitButton>
          </form>
        </div>
      </AuthLayout>
    </div>
  )
}
