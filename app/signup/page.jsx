import { AuthInput, AuthSubmitButton } from "../_components/AuthInputs"
import AuthLayout from "../_components/AuthLayout"
import { EmailSvg, PasswordSvg } from "../_components/AuthSvgs"

const signupScreenText =
  "From ideal planting schedules to precise irrigation strategies, our platform helps you achieve optimal yields and sustainable farming practices."

export default function Signup() {
  return (
    <div className="h-screen w-screen bg-primary-main flex items-center justify-around">
      <AuthLayout mode="signup" bodyText={signupScreenText} headingText={"Create your account for personalized farming insights"}>
        <div>
          <form className="flex flex-col gap-y-[16px]">
            <AuthInput Icon={EmailSvg} inputProps={{ 
              name: "email", placeholder: "Enter your email", value: "", }} />
            <AuthInput Icon={PasswordSvg} inputProps={{ name: "password", placeholder: "Password", value: "", }} />
            <AuthSubmitButton>Continue</AuthSubmitButton>
          </form>
        </div>
      </AuthLayout>
    </div>
  )
}
