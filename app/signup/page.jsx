import Image from "next/image";
import Signup from "../../public/Signup.png";
import React from "react";
import Link from "next/link";


function SignUp() {
  return (
    <div className="w-full h-full bg-[#034732] flex flex-col items-center justify-around md:flex-row">
      <div className="w-[50%] flex flex-col items-center justify-center">
        <Image
          src={Signup}
          alt="signup"
          sizes="100vw"
          className="hidden md:block w-[70%] h-[32rem]"
        />
        <p className="text-center text-white text-sm mt-6 md:ml-20">
          From ideal planting schedules to precise irrigation strategies, our
          platform helps you achieve optimal yields and sustainable farming
          practices."
        </p>
      </div>

      <div className="w-[20rem] md:w-[36rem] h-screen my-3 mx-8 rounded-xl bg-gradient-to-t from-[#035B34] via-[#b38787] to-[#035B34] grid place-content-center">
        <h2 className="text-white text-2xl font-bold text-center mb-2 pb-2 leading-7">
          Create your own account for personalized farming insights.
        </h2>
        <div>
          <form className="mx-3 md:mx-12">
            <div className="relative mb-6">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.289 4.90749C10.4236 4.635 13.576 4.635 16.7106 4.90749L18.2209 5.03877C19.2263 5.12617 20.0873 5.72584 20.5335 6.58361C20.5905 6.69335 20.5478 6.82621 20.4426 6.89132L14.1766 10.7702C12.8328 11.6022 11.1383 11.6196 9.77753 10.8156L3.46971 7.0882C3.3678 7.02798 3.32102 6.90402 3.36695 6.79492C3.7751 5.82536 4.69273 5.13318 5.77877 5.03877L7.289 4.90749Z"
                    fill="#0A0A0A"
                  />
                  <path
                    d="M3.36181 8.76676C3.20585 8.6746 3.00685 8.77377 2.98867 8.95402C2.73493 11.4697 2.79634 14.0091 3.1729 16.5132C3.37141 17.8333 4.44882 18.8454 5.77877 18.961L7.289 19.0923C10.4236 19.3647 13.576 19.3647 16.7107 19.0923L18.2209 18.961C19.5508 18.8454 20.6282 17.8333 20.8268 16.5132C21.2143 13.9361 21.268 11.3216 20.988 8.73415C20.9684 8.55264 20.766 8.45529 20.6107 8.55139L14.9662 12.0456C13.148 13.1712 10.8554 13.1948 9.01444 12.1069L3.36181 8.76676Z"
                    fill="#0A0A0A"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="bg-gray-50  text-gray-600 text-sm rounded-sm focus:ring-blue-200 focus:border-blue-200 block w-full ps-10 p-2.5"
                placeholder="Enter your email address"
              />
            </div>

            {/* //password */}
            <div className="relative mb-6">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 9V7C17 4.2 14.8 2 12 2C9.2 2 7 4.2 7 7V9C5.3 9 4 10.3 4 12V19C4 20.7 5.3 22 7 22H17C18.7 22 20 20.7 20 19V12C20 10.3 18.7 9 17 9ZM9 7C9 5.3 10.3 4 12 4C13.7 4 15 5.3 15 7V9H9V7ZM13.1 15.5L13 15.6V17C13 17.6 12.6 18 12 18C11.4 18 11 17.6 11 17V15.6C10.4 15 10.3 14.1 10.9 13.5C11.5 12.9 12.4 12.8 13 13.4C13.6 13.9 13.7 14.9 13.1 15.5Z"
                    fill="black"
                  />
                </svg>
              </div>
              <input
                type="password"
                className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-sm focus:ring-blue-200 focus:border-blue-200 block w-full ps-10 p-2.5"
                placeholder="Password "
              />
            </div>

            {/* button */}

            <button className="bg-[#f5a0a0] w-full rounded-lg py-2 text-white mb-2">
              Continue
            </button>

            <div className="relative mb-6">
              <div className="absolute inset-y-0  flex items-center ps-3.5 pointer-events-none">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.3055 10.0415H21.5V10H12.5V14H18.1515C17.327 16.3285 15.1115 18 12.5 18C9.1865 18 6.5 15.3135 6.5 12C6.5 8.6865 9.1865 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C6.9775 2 2.5 6.4775 2.5 12C2.5 17.5225 6.9775 22 12.5 22C18.0225 22 22.5 17.5225 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M3.65283 7.3455L6.93833 9.755C7.82733 7.554 9.98033 6 12.4998 6C14.0293 6 15.4208 6.577 16.4803 7.5195L19.3088 4.691C17.5228 3.0265 15.1338 2 12.4998 2C8.65883 2 5.32783 4.1685 3.65283 7.3455Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M12.5002 22.0003C15.0832 22.0003 17.4302 21.0118 19.2047 19.4043L16.1097 16.7853C15.0719 17.5745 13.8039 18.0014 12.5002 18.0003C9.89916 18.0003 7.69066 16.3418 6.85866 14.0273L3.59766 16.5398C5.25266 19.7783 8.61366 22.0003 12.5002 22.0003Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M22.3055 10.0415H21.5V10H12.5V14H18.1515C17.7571 15.1082 17.0467 16.0766 16.108 16.7855L16.1095 16.7845L19.2045 19.4035C18.9855 19.6025 22.5 17 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
                    fill="#1976D2"
                  />
                </svg>
              </div>
              <button className="bg-white w-full text-gray-600 rounded-lg py-2 mt-2 text-sm">
                Sign In with Google
              </button>
            </div>
          </form>

          <p className="text-white text-sm text-center">
          Already have an account? <Link href='/login'>Sign In</Link>
          </p>
          <div className="flex items-center justify-around mt-6 text-white text-xs ">
            <div className="flex justify-between">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <p>Forget Password?</p>
          </div>

          <div className="flex justify-center items-center mt-6 cursor-pointer">
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_120_2004)">
                <path
                  d="M16.726 16.1892H13.9108V11.7803C13.9108 10.729 13.892 9.37565 12.4466 9.37565C10.9804 9.37565 10.756 10.5211 10.756 11.7038V16.1889H7.94088V7.1226H10.6434V8.3616H10.6813C10.9517 7.89915 11.3425 7.51871 11.8121 7.2608C12.2817 7.0029 12.8124 6.87718 13.3478 6.89705C16.2011 6.89705 16.7272 8.77389 16.7272 11.2155L16.726 16.1892ZM4.76431 5.88337C3.86204 5.88351 3.13046 5.15216 3.13031 4.24989C3.13016 3.34761 3.86144 2.61603 4.76372 2.61589C5.666 2.61566 6.39757 3.34701 6.39772 4.24929C6.3978 4.68258 6.22575 5.09816 5.91943 5.40461C5.61311 5.71105 5.19761 5.88327 4.76431 5.88337ZM6.17195 16.1892H3.35379V7.1226H6.17187V16.1892L6.17195 16.1892ZM18.1295 0.00138284H1.93918C1.17398 -0.00722654 0.546461 0.605746 0.537109 1.37094V17.6288C0.546164 18.3943 1.17361 19.0079 1.9391 18.9999H18.1295C18.8966 19.0094 19.5265 18.3958 19.5371 17.6288V1.36968C19.5262 0.603 18.8962 -0.00989841 18.1295 0.000121117"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_120_2004">
                  <rect
                    width="19"
                    height="19"
                    fill="white"
                    transform="translate(0.537109)"
                  />
                </clipPath>
              </defs>
            </svg>

            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4049 9.93975C14.3975 8.67432 14.9708 7.72061 16.1286 7.01738C15.4811 6.08965 14.5014 5.57939 13.21 5.48105C11.9872 5.38457 10.6494 6.19355 10.1596 6.19355C9.64189 6.19355 8.45811 5.51445 7.52666 5.51445C5.60439 5.54414 3.56152 7.04707 3.56152 10.1049C3.56152 11.0085 3.72666 11.9418 4.05693 12.9029C4.49854 14.1684 6.09053 17.2688 7.75117 17.2188C8.61953 17.1983 9.23369 16.6027 10.3637 16.6027C11.4603 16.6027 12.028 17.2188 12.9966 17.2188C14.6721 17.1946 16.1119 14.3762 16.5312 13.107C14.2843 12.0476 14.4049 10.0047 14.4049 9.93975ZM12.4548 4.28057C13.3955 3.16357 13.3102 2.14678 13.2823 1.78125C12.4511 1.82949 11.4899 2.34717 10.9426 2.98359C10.3396 3.66641 9.98516 4.51064 10.0612 5.4625C10.9593 5.53115 11.7794 5.06914 12.4548 4.28057Z"
                fill="white"
              />
            </svg>

            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_120_2008)">
                <path
                  d="M0.537109 2.68787L8.27166 1.63459L8.27499 9.09516L0.544133 9.13915L0.537109 2.68795V2.68787ZM8.26796 9.95467L8.27388 17.4217L0.543098 16.3589L0.542654 9.90462L8.26789 9.95467H8.26796ZM9.20554 1.49671L19.4608 0V9.00023L9.20554 9.08156V1.49679V1.49671ZM19.4632 10.0249L19.4607 18.9845L9.20547 17.5371L9.19113 10.0081L19.4632 10.0249Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_120_2008">
                  <rect
                    width="18.9261"
                    height="19"
                    fill="white"
                    transform="translate(0.537109)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
