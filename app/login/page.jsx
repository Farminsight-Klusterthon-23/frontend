import React from "react"
import { EmailSvg, PasswordSvg } from "../_components/AuthSvgs"
import { AuthInput, AuthSubmitButton } from "../_components/AuthInputs"
import AuthLayout from "../_components/AuthLayout"

const loginScreenText =
  "Log in to your Farm insightI account and pick up right where you left off. Your farm's success story continues with real-time insights, weather updates, and expert advice. Let's grow together!"

export default function Login() {
  return (
    <div className="h-screen w-screen bg-primary-main flex items-center justify-around">
      <AuthLayout
        mode="login"
        bodyText={loginScreenText}
        headingText={"Great to see you again!"}
      >
        <div>
          <form className="flex flex-col gap-y-[16px]">
            <AuthInput
              Icon={EmailSvg}
              inputProps={{
                name: "email",
                placeholder: "Enter your email",
                value: "",
              }}
            />
            <AuthInput
              Icon={PasswordSvg}
              inputProps={{
                name: "password",
                placeholder: "Password",
                value: "",
              }}
            />
            <AuthSubmitButton>Continue</AuthSubmitButton>
          </form>
        </div>
      </AuthLayout>
    </div>
  )
}
