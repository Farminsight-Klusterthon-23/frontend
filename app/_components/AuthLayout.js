import Image from "next/image"
import Link from "next/link"

const textFormat = {
  login: ["Dont't have an account?", "Signup!"],
  signup: ["Already have an account?", "Sign in!"],
}
export default function AuthLayout({ mode, children, bodyText, headingText }) {
  return (
    <main className="md:grid md:grid-cols-2 w-[95dvw] max-w-[1280px] items-center gap-x-[10%]">
      <div className="hidden md:block">
        <ImageSection isSignup={mode === "signup"} imgSrc={`/${mode}.png`}>
          {bodyText}
        </ImageSection>
      </div>
      <div className="flex min-h-[95dvh] items-center justify-center bg-auth-gradient rounded-[20px]">
        <div className="max-w-[90%]">
          <h1 className="mb-[45px] font-[600] text-[1.5rem] md:text-[2rem] leading-[120%] text-center text-white">
            {headingText}
          </h1>
          <div className="w-full max-w-[480px] mx-auto">
            {children}
            <small className="text-white text-[1rem] font-[400] block mx-auto text-center mt-[16px]">
              {textFormat[mode][0]}&nbsp;
              <Link href={mode === "signup" ? "/login" : "/signup"}>
                {textFormat[mode][1]}
              </Link>
            </small>
          </div>
        </div>
      </div>
    </main>
  )
}

function ImageSection({ imgSrc, children, isSignup }) {
  return (
    <div className="flex flex-col items-start gap-y-[16px]">
      <Image
        className="object-contain"
        src={imgSrc}
        width={500}
        height={700}
        alt=""
      />
      <p
        className={`${
          isSignup ? "mx-auto" : ""
        } font-montserrat text-base font-[400] w-full max-w-[490px] text-white leading-[120%]`}
      >
        {children}
      </p>
    </div>
  )
}
