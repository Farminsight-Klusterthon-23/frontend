/* eslint-disable react/no-unescaped-entities */
import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="w-full h-full p-7 bg-[#151716]"
      style={{
        backgroundImage: "url('/vector-bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="hero">
        <div className="hero__container lg:flex items-center ">
          <div className="hero__container__text w-[800px]">
            <h1 className="text-white text-[48px] font-bold font-['Sora'] leading-[60.50px] mb-2">
              Empowering Farmers with Intelligent Agricultural Insights
            </h1>
            <p className="w-[516px] text-white text-base text-[16px] font-normal font-['Montserrat'] leading-[29.50px] mb-[2rem]">
              Cutting-edge technology designed to revolutionize the way farmers
              make decisions and manage their crops.
            </p>
            <div className="flex gap-2">
              <Button text="Learn more" />
              <Button text="Get started" bg="bg-[#008148]" />
            </div>
            <div className="w-[388px] mt-4 h-[186px] flex-col justify-start items-start gap-[30px] inline-flex">
              <div className="w-[388px] h-6 bg-gradient-to-r from-emerald-700 to-zinc-700"></div>
              <div className="w-[388px] h-6 bg-gradient-to-r from-emerald-700 to-zinc-700"></div>
              <div className="w-[388px] h-6 bg-gradient-to-r rotate-180 from-emerald-700 to-zinc-700"></div>
              <div className="w-[388px] h-6 bg-gradient-to-r rotate-180 from-emerald-700 to-zinc-700"></div>
            </div>
          </div>
          <div className="hero__container__img relative">
            <Image src="/hero.png" alt="Farm tool" width={500} height={500} />
            <div className="btns flex flex-wrap absolute bottom-[10px] p-2 justify-start items-start gap-2 inline-flex">
              <Button text="Get Weather report" bg="bg-[#008148]" />
              <Button text="Save for offline" bg="bg-[#008148]" />
              <Button text="AI model" bg="bg-[#008148]" />
              <Button text="Knowledge base" bg="bg-[#008148]" />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[10rem]">
        <h1 className="w-[616px] text-white text-[56px] font-normal font-['Sora'] leading-[65.50px]">
          Revolutionising Agricultultre
        </h1>
        <hr className="mt-[5rem] w-full h-[2px] bg-[#E3E3E3]" />

        <div className="crop-agric lg:flex items-center mt-8 justify-between">
          <Image src="/hero2.png" alt="Farm tool" width={500} height={500} />
          <div className="w-[566px] h-[547px] flex-col justify-start items-end gap-7 inline-flex">
            <div className="pb-6 border-b border-slate-500 flex-col justify-start items-start gap-2 flex">
              <div className="flex-col justify-start items-start gap-px flex">
                <h3 className="text-white text-[28px] font-normal font-['Sora'] leading-10">
                  AI Guidance for Crop Management
                </h3>
                <p className="w-[566px] text-white text-base font-normal font-['Montserrat'] leading-[29.50px]">
                  Navigate through complex agricultural decisions with
                  confidence. Our AI system analyzes data on soil health,
                  weather conditions, and historical trends to offer
                  personalized recommendations for crop management.
                </p>
              </div>
            </div>
            <div className="pb-6 border-b border-slate-500 flex-col justify-start items-start gap-2 flex">
              <div className="flex-col justify-start items-start gap-px flex">
                <h3 className="text-white text-[28px] font-normal font-['Sora'] leading-10">
                  Real-time Weather and Pest Alerts
                </h3>
                <p className="w-[566px] text-white text-base font-normal font-['Montserrat'] leading-[29.50px]">
                  Receive instant alerts about changing weather conditions and
                  potential pest threats. Stay one step ahead to protect your
                  crops and maximize yields.
                </p>
              </div>
            </div>
            <div className="pb-6 border-b border-slate-500 flex-col justify-start items-start gap-2 flex">
              <div className="flex-col justify-start items-start gap-px flex">
                <h3 className="text-white text-[28px] font-normal font-['Sora'] leading-10">
                  Offline Storage
                </h3>
                <p className="w-[566px] text-white text-base font-normal font-['Montserrat'] leading-[29.50px]">
                  Save important articles and chat history for offline access.
                  No need to worry about connectivity issues – your data is
                  always within reach.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="weather lg:mt-[10rem]">
        <h1 className="text-white text-[48px] font-semibold font-['Sora'] leading-10">
          Make informed Decisions
        </h1>
        <p className="w-[851px] mt-4 text-white text-base font-normal font-['Montserrat'] leading-[29.50px]">
          Provides farmers with a comprehensive toolset to protect their crops
          against environmental challenges. The real-time nature of these
          features enables proactive decision-making, reducing the impact of
          pests and adverse weather conditions on crop yields.
        </p>
        <div className="weather-cards mt-[4rem] lg:flex justify-between gap-4">
          <div className="p-6 bg-white bg-opacity-5 rounded-3xl border border-white flex-col justify-center items-start gap-[50px] inline-flex">
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="text-white text-2xl font-normal font-['Sora'] leading-10">
                Weather Forecast
              </div>
              <div className="w-[472px] text-white text-base font-normal font-['Montserrat'] leading-[29.50px]">
                Gain access to historical weather data, allowing farmers to
                review past weather patterns and trends. This information is
                valuable for making informed decisions about crop selection,
                planting times, and other aspects of farm management.
              </div>
            </div>
            <div className="w-full h-16 relative flex justify-between">
              <svg
                width="23"
                height="26"
                viewBox="0 0 23 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-[1rem]"
              >
                <path
                  d="M18.5 2L7.5 13L18.5 24"
                  stroke="#FF6E6E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="w-full h-8 flex justify-between">
                <div className="items-center justify-center  text-cente text-white text-opacity-60 text-sm font-normal font-['Inter']">
                  <p>FRI</p>
                  <svg
                    width="29"
                    height="28"
                    viewBox="0 0 29 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.33325 19.8333H21.4999C24.0772 19.8333 26.1666 17.744 26.1666 15.1667C26.1666 12.9778 24.6596 11.1409 22.6266 10.6369C22.653 10.4005 22.6666 10.1602 22.6666 9.91667C22.6666 6.37284 19.7937 3.5 16.2499 3.5C13.3106 3.5 10.8328 5.47637 10.0731 8.17272C9.99364 8.1687 9.91369 8.16667 9.83325 8.16667C7.25592 8.16667 5.16659 10.256 5.16659 12.8333C5.16659 12.8996 5.16796 12.9655 5.1707 13.031C3.80916 13.5104 2.83325 14.8079 2.83325 16.3333C2.83325 18.2663 4.40026 19.8333 6.33325 19.8333Z"
                      fill="white"
                      fillOpacity="0.6"
                    />
                    <path
                      d="M9.15027 21C8.85384 21 8.58284 21.1675 8.45027 21.4326L6.89956 24.534C6.63938 25.0544 7.01778 25.6667 7.59956 25.6667C7.896 25.6667 8.16699 25.4992 8.29956 25.234L9.85027 22.1326C10.1105 21.6123 9.73206 21 9.15027 21Z"
                      fill="white"
                      fillOpacity="0.6"
                    />
                    <path
                      d="M12.6503 21C13.2321 21 13.6105 21.6123 13.3503 22.1326L11.7996 25.234C11.667 25.4992 11.396 25.6667 11.0996 25.6667C10.5178 25.6667 10.1394 25.0544 10.3996 24.534L11.9503 21.4326C12.0828 21.1675 12.3538 21 12.6503 21Z"
                      fill="white"
                      fillOpacity="0.6"
                    />
                    <path
                      d="M19.6503 21C20.2321 21 20.6105 21.6123 20.3503 22.1326L18.7996 25.234C18.667 25.4992 18.396 25.6667 18.0996 25.6667C17.5178 25.6667 17.1394 25.0544 17.3996 24.534L18.9503 21.4326C19.0828 21.1675 19.3538 21 19.6503 21Z"
                      fill="white"
                      fillOpacity="0.6"
                    />
                    <path
                      d="M16.1503 21C16.7321 21 17.1105 21.6123 16.8503 22.1326L15.2996 25.234C15.167 25.4992 14.896 25.6667 14.5996 25.6667C14.0178 25.6667 13.6394 25.0544 13.8996 24.534L15.4503 21.4326C15.5828 21.1675 15.8538 21 16.1503 21Z"
                      fill="white"
                      fillOpacity="0.6"
                    />
                  </svg>
                </div>
                <div className="text-[18px]  text-center text-white text-opacity-80 text-base font-normal font-['Inter']">
                  <p>SAT</p>
                  <svg
                    width="31"
                    height="30"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.06537 5.75799L7.57765 5.26826C7.08993 4.77854 6.30207 4.7911 5.82685 5.26826L5.81435 5.28082C5.32663 5.77055 5.32663 6.56164 5.81435 7.03881L6.30207 7.52854C6.78979 8.01826 7.56514 8.01826 8.05287 7.52854L8.06537 7.51598C8.55309 7.03881 8.55309 6.23516 8.06537 5.75799ZM4.26364 13.7443H2.98806C2.30025 13.7443 1.75 14.2968 1.75 14.9874V15C1.75 15.6906 2.30025 16.2431 2.98806 16.2431H4.25114C4.95146 16.2557 5.50171 15.7032 5.50171 15.0126V15C5.50171 14.2968 4.95146 13.7443 4.26364 13.7443ZM15.5188 1.25H15.5063C14.8059 1.25 14.2557 1.80251 14.2557 2.49315V3.69863C14.2557 4.38927 14.8059 4.94178 15.4937 4.94178H15.5063C16.2066 4.95434 16.7568 4.40183 16.7568 3.71119V2.49315C16.7568 1.80251 16.2066 1.25 15.5188 1.25ZM25.1982 5.28082C24.7104 4.7911 23.9226 4.7911 23.4349 5.26826L22.9471 5.75799C22.4594 6.24772 22.4594 7.03881 22.9471 7.51598L22.9596 7.52854C23.4474 8.01826 24.2352 8.01826 24.7104 7.52854L25.1982 7.03881C25.6859 6.54909 25.6859 5.77055 25.1982 5.28082ZM22.9346 24.242L23.4224 24.7317C23.9101 25.2215 24.6979 25.2215 25.1857 24.7317C25.6734 24.242 25.6734 23.4509 25.1857 22.9612L24.6979 22.4715C24.2102 21.9817 23.4224 21.9943 22.9471 22.4715C22.4469 22.9737 22.4469 23.7523 22.9346 24.242ZM25.5108 14.9874V15C25.5108 15.6906 26.0611 16.2431 26.7489 16.2431H28.0119C28.6998 16.2431 29.25 15.6906 29.25 15V14.9874C29.25 14.2968 28.6998 13.7443 28.0119 13.7443H26.7489C26.0611 13.7443 25.5108 14.2968 25.5108 14.9874ZM15.5063 7.46575C11.3669 7.46575 8.00284 10.8436 8.00284 15C8.00284 19.1564 11.3669 22.5342 15.5063 22.5342C19.6456 22.5342 23.0097 19.1564 23.0097 15C23.0097 10.8436 19.6456 7.46575 15.5063 7.46575ZM15.4937 28.75H15.5063C16.1941 28.75 16.7443 28.1975 16.7443 27.5068V26.3014C16.7443 25.6107 16.1941 25.0582 15.5063 25.0582H15.4937C14.8059 25.0582 14.2557 25.6107 14.2557 26.3014V27.5068C14.2557 28.1975 14.8059 28.75 15.4937 28.75ZM5.81435 24.7192C6.30207 25.2089 7.08993 25.2089 7.57765 24.7192L8.06537 24.2295C8.55309 23.7397 8.54059 22.9486 8.06537 22.4715L8.05287 22.4589C7.56514 21.9692 6.77729 21.9692 6.28956 22.4589L5.80184 22.9486C5.32663 23.4509 5.32663 24.2295 5.81435 24.7192Z"
                      fill="white"
                      fillOpacity="0.8"
                    />
                  </svg>
                </div>
                <div className="left-[143px] mt-[-12px]  text-center text-white text-2xl font-normal font-['Inter']">
                  <p>SUN</p>
                  <svg
                    width="36"
                    height="34"
                    viewBox="0 0 36 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_103_2484)">
                      <path
                        d="M5.40972 6.22356L5.03056 5.85523C4.65139 5.4869 4.03889 5.49634 3.66945 5.85523L3.65972 5.86467C3.28056 6.23301 3.28056 6.82801 3.65972 7.1869L4.03889 7.55523C4.41806 7.92356 5.02083 7.92356 5.4 7.55523L5.40972 7.54579C5.78889 7.1869 5.78889 6.58245 5.40972 6.22356Z"
                        fill="white"
                      />
                      <path
                        d="M2.45417 12.2302H1.4625C0.927778 12.2302 0.5 12.6458 0.5 13.1652V13.1747C0.5 13.6941 0.927778 14.1097 1.4625 14.1097H2.44444C2.98889 14.1191 3.41667 13.7036 3.41667 13.1841V13.1747C3.41667 12.6458 2.98889 12.2302 2.45417 12.2302Z"
                        fill="white"
                      />
                      <path
                        d="M11.2042 2.83301H11.1944C10.65 2.83301 10.2222 3.24856 10.2222 3.76801V4.67467C10.2222 5.19412 10.65 5.60967 11.1847 5.60967H11.1944C11.7389 5.61912 12.1667 5.20356 12.1667 4.68412V3.76801C12.1667 3.24856 11.7389 2.83301 11.2042 2.83301Z"
                        fill="white"
                      />
                      <path
                        d="M18.7292 5.86467C18.35 5.49634 17.7375 5.49634 17.3583 5.85523L16.9792 6.22356C16.6 6.5919 16.6 7.1869 16.9792 7.54579L16.9889 7.55523C17.3681 7.92356 17.9806 7.92356 18.35 7.55523L18.7292 7.1869C19.1083 6.81856 19.1083 6.23301 18.7292 5.86467Z"
                        fill="white"
                      />
                      <path
                        d="M11.1944 7.50801C7.97639 7.50801 5.36111 10.0486 5.36111 13.1747C5.36111 15.201 6.45996 16.9813 8.10955 17.9832C8.89888 15.7619 11.0701 14.1663 13.625 14.1663C13.7255 14.1663 13.8255 14.1688 13.9248 14.1737C14.3459 12.7217 15.1894 11.4417 16.3182 10.4667C15.3282 8.70497 13.4033 7.50801 11.1944 7.50801Z"
                        fill="white"
                      />
                      <path
                        d="M3.65972 20.4847C4.03889 20.853 4.65139 20.853 5.03056 20.4847L5.40972 20.1163C5.78889 19.748 5.77917 19.153 5.40972 18.7941L5.4 18.7847C5.02083 18.4163 4.40833 18.4163 4.02917 18.7847L3.65 19.153C3.28056 19.5308 3.28056 20.1163 3.65972 20.4847Z"
                        fill="white"
                      />
                      <path
                        d="M10.7083 29.7497H29.6667C32.8883 29.7497 35.5 27.2126 35.5 24.083C35.5 21.4251 33.6163 19.1946 31.075 18.5826C31.108 18.2955 31.125 18.0037 31.125 17.708C31.125 13.4048 27.534 9.91634 23.1042 9.91634C19.43 9.91634 16.3328 12.3162 15.3831 15.5904C15.2838 15.5855 15.1839 15.583 15.0833 15.583C11.8617 15.583 9.25 18.1201 9.25 21.2497C9.25 21.3301 9.25173 21.4101 9.25514 21.4897C7.55322 22.0718 6.33333 23.6473 6.33333 25.4997C6.33333 27.8469 8.29209 29.7497 10.7083 29.7497Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_103_2484">
                        <rect
                          width="35"
                          height="34"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="left-[137.11px]  text-center text-white text-opacity-80 text-base font-normal font-['Inter']">
                  <p>MON</p>
                  <svg
                    width="31"
                    height="30"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_103_2486)">
                      <path
                        d="M4.38333 2.66667L4.70833 2.99167C5.03333 3.30833 5.03333 3.84167 4.70833 4.15833L4.7 4.16667C4.375 4.49167 3.85833 4.49167 3.53333 4.16667L3.20833 3.84167C2.88333 3.525 2.88333 3 3.20833 2.675L3.21667 2.66667C3.53333 2.35 4.05833 2.34167 4.38333 2.66667Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                      <path
                        d="M1.325 8.29167H2.175C2.63333 8.29167 3 8.65833 3 9.125V9.13333C3 9.59167 2.63333 9.95833 2.16667 9.95H1.325C0.866667 9.95 0.5 9.58333 0.5 9.125V9.11667C0.5 8.65833 0.866667 8.29167 1.325 8.29167Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                      <path
                        d="M9.66667 0H9.675C10.1333 0 10.5 0.366667 10.5 0.825V1.63333C10.5 2.09167 10.1333 2.45833 9.66667 2.45H9.65833C9.2 2.45 8.83333 2.08333 8.83333 1.625V0.825C8.83333 0.366667 9.2 0 9.66667 0Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                      <path
                        d="M14.95 2.66667C15.275 2.35 15.8 2.35 16.125 2.675C16.45 3 16.45 3.51667 16.125 3.84167L15.8 4.16667C15.4833 4.49167 14.9583 4.49167 14.6333 4.16667L14.625 4.15833C14.3 3.84167 14.3 3.31667 14.625 2.99167L14.95 2.66667Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                      <path
                        d="M4.66667 9.125C4.66667 6.36667 6.90833 4.125 9.66667 4.125C11.56 4.125 13.2099 5.18114 14.0585 6.73558C13.0909 7.59592 12.3679 8.72535 12.007 10.0065C11.9219 10.0022 11.8362 10 11.75 10C9.56011 10 7.69904 11.4078 7.02247 13.3678C5.60854 12.4838 4.66667 10.913 4.66667 9.125Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                      <path
                        d="M4.38333 15.575C4.05833 15.9 3.53333 15.9 3.20833 15.575C2.88333 15.25 2.88333 14.7333 3.2 14.4L3.525 14.075C3.85 13.75 4.375 13.75 4.7 14.075L4.70833 14.0833C5.025 14.4 5.03333 14.925 4.70833 15.25L4.38333 15.575Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                      <path
                        d="M25.5 23.75H9.25C7.17893 23.75 5.5 22.0711 5.5 20C5.5 18.3656 6.54561 16.9754 8.00441 16.4618C8.00148 16.3916 8 16.321 8 16.25C8 13.4886 10.2386 11.25 13 11.25C13.0862 11.25 13.1719 11.2522 13.257 11.2565C14.071 8.36754 16.7257 6.25 19.875 6.25C23.672 6.25 26.75 9.32804 26.75 13.125C26.75 13.3859 26.7355 13.6434 26.7072 13.8967C28.8854 14.4367 30.5 16.4048 30.5 18.75C30.5 21.5114 28.2614 23.75 25.5 23.75Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                      <path
                        d="M12.9818 28.7865L14.6432 25.4635C14.7853 25.1794 15.0756 25 15.3932 25C16.0166 25 16.422 25.656 16.1432 26.2135L14.4818 29.5365C14.3397 29.8206 14.0494 30 13.7318 30C13.1084 30 12.703 29.344 12.9818 28.7865Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                      <path
                        d="M16.7318 28.7865L18.3932 25.4635C18.5353 25.1794 18.8256 25 19.1432 25C19.7666 25 20.172 25.656 19.8932 26.2135L18.2318 29.5365C18.0897 29.8206 17.7994 30 17.4818 30C16.8584 30 16.453 29.344 16.7318 28.7865Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_103_2486">
                        <rect
                          width="30"
                          height="30"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="text-center text-white text-opacity-60 text-sm font-normal font-['Inter']">
                  <p>TUES</p>
                  <svg
                    width="29"
                    height="28"
                    viewBox="0 0 29 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.0103 19.8333H21.4999C24.0772 19.8333 26.1666 17.744 26.1666 15.1667C26.1666 12.9778 24.6596 11.1409 22.6266 10.6369C22.653 10.4005 22.6666 10.1602 22.6666 9.91667C22.6666 6.37284 19.7937 3.5 16.2499 3.5C13.3106 3.5 10.8328 5.47637 10.0731 8.17272C9.99364 8.1687 9.91369 8.16667 9.83325 8.16667C7.25592 8.16667 5.16659 10.256 5.16659 12.8333C5.16659 12.8996 5.16796 12.9655 5.1707 13.031C3.80916 13.5104 2.83325 14.8079 2.83325 16.3333C2.83325 18.2663 4.40026 19.8333 6.33325 19.8333H9.65621L14.6536 11.0878C15.2472 10.0491 16.8333 10.4703 16.8333 11.6667V16.3333H17.9999C18.8957 16.3333 19.4573 17.3011 19.0129 18.0788L18.0103 19.8333Z"
                      fill="white"
                      fillOpacity="0.6"
                    />
                    <path
                      d="M10.9999 19.8333L15.6666 11.6667V17.5H17.9999L13.3333 25.6667V19.8333H10.9999Z"
                      fill="white"
                      fillOpacity="0.6"
                    />
                  </svg>
                </div>
              </div>
              <svg
                width="23"
                height="26"
                viewBox="0 0 23 26"
                className="ml-[1rem]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 24L15.5 13L4.5 2"
                  stroke="#FF6E6E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="main-container h-[262px] relative bg-gray-700 rounded-[12px] w-full">
              <div className="flex w-[32.55%] h-[7.03%] justify-between items-center absolute top-[4.2%] left-[3.96%] z-[2]">
                <div className="w-2 h-4 shrink-0  bg-[length:100%_100%] bg-no-repeat" />
                <span className="w-[119.733px] h-[18.424px] shrink-0 font-[Inter] text-sm font-medium leading-[17.342px] text-[#fff] text-left break-words">
                  24-hour forecast
                </span>
              </div>
              <div className="w-[143.673px] h-[22.704px] absolute top-[71.649px] left-[9.212px] z-[3]">
                <span className="w-[82.885px] h-[15.354px] font-[Inter] text-sm font-medium leading-[17.342px] text-[#fff] absolute top-0 left-0 text-center z-[4] break-words">
                  26°
                </span>
                <span className="w-[82.885px] h-[15.354px] font-[Inter] text-sm font-medium leading-[17.342px] text-[#fff] absolute top-[7.351px] left-[61.788px] text-center z-[5] break-words">
                  26°
                </span>
              </div>
              <div className="w-[478px] h-[72.235px] absolute top-[88px] left-[-1px] z-[6]">
                <div className="w-[477.419px] h-[65.952px]  bg-cover bg-no-repeat absolute top-[-1.019px] left-px z-[7]">
                  <div className="w-[175.848px] h-[15.354px] absolute top-0.5 left-[45.037px] z-[8]">
                    <div className="w-[5.118px] h-[5.118px]  bg-cover bg-no-repeat absolute top-[0.05px] left-0 z-[9]" />
                    <span className="w-[82.885px] h-[15.354px] font-[Inter] text-sm font-medium leading-[17.342px] text-[#fff] absolute top-0 left-[93.963px] text-center z-10 break-words">
                      22°
                    </span>
                  </div>
                  <div className="w-[401.801px] h-[30.707px] absolute top-2 left-[47.084px] z-[11]">
                    <div className="h-[30.707px] bg-cover bg-no-repeat absolute top-0 left-0 z-[12]" />
                    <span className="w-[82.885px] h-[15.354px] font-[Inter] text-sm font-medium leading-[17.342px] text-[#fff] absolute top-[11.259px] left-[253.843px] text-center z-[13] break-words">
                      16°
                    </span>
                    <span className="w-[82.885px] h-[15.354px] font-[Inter] text-sm font-medium leading-[17.342px] text-[#fff] absolute top-[11.809px] left-[319.916px] text-center z-[14] break-words">
                      20°
                    </span>
                  </div>
                  <div className="w-6 h-6 absolute top-10 left-[34.801px] z-[15]">
                    <div className="w-full h-[79.17%]  bg-[length:100%_100%] bg-no-repeat absolute top-[8.33%] left-0 z-[16]" />
                  </div>
                </div>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  className="absolute top-[38px] left-[30px] z-[17]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_103_2523)">
                    <path
                      d="M5.92243 15.4484C5.70268 15.5257 5.49438 15.6274 5.30076 15.7501C4.43886 15.3935 3.63155 14.8629 2.93188 14.1585C0.0907415 11.3269 0.0907415 6.72384 2.93188 3.89229C3.22253 3.60187 3.52772 3.3405 3.8547 3.10817C4.39968 2.72337 5.2571 3.36954 5.19897 3.97215C5.00278 6.04862 5.70035 8.20496 7.29894 9.79498C7.90907 10.4074 8.60144 10.8875 9.34084 11.2356C7.39947 11.5563 5.91883 13.2427 5.91883 15.2749C5.91883 15.333 5.92004 15.3908 5.92243 15.4484Z"
                      fill="white"
                    />
                    <path
                      d="M11.5824 6.53544L12.1216 8.32318C12.0685 8.36586 12.0161 8.40948 11.9645 8.45403L10.393 7.3877L8.57438 8.62177L9.20366 6.53544L7.45415 5.21274L9.66005 5.15138L10.393 3.10596L11.126 5.15138L13.3319 5.21274L11.5824 6.53544Z"
                      fill="white"
                    />
                    <path
                      d="M17.8001 5.32184L18.9341 4.46958L17.5096 4.43549L17.0325 3.10597L16.5553 4.43549L15.1308 4.46958L16.2649 5.32184L15.8569 6.67181L17.0325 5.8741L18.208 6.67181L17.8001 5.32184Z"
                      fill="white"
                    />
                    <path
                      d="M7.96595 22.4398H21.2722C23.5334 22.4398 25.3665 20.6068 25.3665 18.3456C25.3665 16.4252 24.0444 14.8137 22.2607 14.3715C22.2839 14.164 22.2958 13.9532 22.2958 13.7396C22.2958 10.6304 19.7753 8.10999 16.6662 8.10999C14.0874 8.10999 11.9136 9.84393 11.247 12.2095C11.1773 12.206 11.1072 12.2042 11.0366 12.2042C8.77544 12.2042 6.94239 14.0373 6.94239 16.2985C6.94239 16.3566 6.9436 16.4144 6.94599 16.4719C5.75146 16.8924 4.89526 18.0308 4.89526 19.3692C4.89526 21.065 6.27006 22.4398 7.96595 22.4398Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_103_2523">
                      <rect
                        width="24.5654"
                        height="24.5654"
                        fill="white"
                        transform="translate(0.801025 0.945312)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span className="w-[39.895px] h-2.5 font-[Inter] text-[8.188481330871582px] font-normal leading-[9.91px] text-[#fff] absolute top-[62px] left-[29px] text-center z-[17] break-words">
                  11.7km/h
                </span>
                <div className="w-6 h-6 absolute top-[47.354px] left-[98.612px] z-[18]">
                  <div className="w-[80.18%] h-[87.57%] bg-[length:100%_100%] bg-no-repeat absolute top-[4.17%] left-[8.36%] z-[19]" />
                </div>
              </div>
              <div className="w-[164.225px] h-[26.141px] absolute top-[145.354px] left-7 z-20">
                <span className="w-[39.895px] h-2.5 font-[Inter] text-[8.188481330871582px] font-normal leading-[9.91px] text-[#fff] absolute top-[15.905px] left-0 text-center z-[21] break-words">
                  Now
                </span>
                <svg
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[-15px] left-[66.895px] z-[21]"
                >
                  <path
                    d="M18.7801 4.53975L16.1905 6.52546L17.122 9.65755L14.43 7.80491L11.7381 9.65755L12.6695 6.52546L10.0799 4.53975L13.345 4.44763L14.43 1.37695L15.515 4.44763L18.7801 4.53975ZM22.3626 11.6126L20.684 12.892L21.2879 14.9187L19.5478 13.7211L17.8078 14.9187L18.4117 12.892L16.733 11.6126L18.8416 11.5614L19.5478 9.56543L20.2541 11.5614L22.3626 11.6126ZM20.0289 16.6792C20.8784 16.5973 21.7894 17.8051 21.2469 18.5728C20.9194 19.0334 20.5714 19.4633 20.1415 19.8727C16.1394 23.8953 9.66022 23.8953 5.66834 19.8727C1.66622 15.8808 1.66622 9.39143 5.66834 5.39954C6.07776 4.99012 6.50766 4.62164 6.96826 4.2941C7.73593 3.75161 8.94373 4.66258 8.86185 5.51214C8.58548 8.43952 9.5681 11.4795 11.8199 13.7211C14.0615 15.9729 17.0913 16.9555 20.0289 16.6792Z"
                    fill="white"
                  />
                </svg>
                <span className="w-[39.895px] h-2.5 font-[Inter] text-[8.188481330871582px] font-normal leading-[9.91px] text-[#fff] absolute top-3.5 left-[62.55px] text-center z-[22] break-words">
                  9.3km/h
                </span>
                <div className="w-6 h-6 absolute top-0 left-[139.659px] z-[23]">
                  <div className="w-full h-full bg-[length:100%_100%] bg-no-repeat absolute top-0 left-0 z-[24]" />
                </div>
              </div>
              <div className="w-[325.181px] h-[29.311px] absolute top-[162.804px] left-[90.55px] z-[25]">
                <span className="w-[39.895px] h-2.5 font-[Inter] text-[8.188481330871582px] font-normal leading-[9.91px] text-[#fff] absolute top-2 left-0 text-center z-[26] break-words">
                  22:00
                </span>
                <svg
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[-15px] left-[76.895px] z-[26]"
                >
                  <g clipPath="url(#clip0_103_2498)">
                    <path
                      d="M5.15891 13.1114C5.35254 12.9887 5.56084 12.8871 5.78059 12.8097C5.77819 12.7522 5.77698 12.6943 5.77698 12.6362C5.77698 10.604 7.25763 8.91759 9.199 8.59692C8.4596 8.24879 7.76722 7.76872 7.1571 7.15631C5.5585 5.56628 4.86094 3.40995 5.05713 1.33348C5.11526 0.730868 4.25783 0.0846935 3.71286 0.469494C3.38587 0.701826 3.08068 0.9632 2.79003 1.25362C-0.0511042 4.08517 -0.0511042 8.68825 2.79003 11.5198C3.4897 12.2243 4.29701 12.7548 5.15891 13.1114Z"
                      fill="white"
                    />
                    <path
                      d="M11.9798 5.6845L11.4406 3.89677L13.1901 2.57407L10.9842 2.51271L10.2512 0.467291L9.5182 2.51271L7.3123 2.57407L9.06181 3.89677L8.43254 5.9831L10.2512 4.74903L11.8227 5.81536C11.8742 5.77081 11.9266 5.72719 11.9798 5.6845Z"
                      fill="white"
                    />
                    <path
                      d="M18.7923 1.83091L17.6582 2.68316L18.0662 4.03314L16.8906 3.23543L15.7151 4.03314L16.1231 2.68316L14.989 1.83091L16.4135 1.79682L16.8906 0.467297L17.3678 1.79682L18.7923 1.83091Z"
                      fill="white"
                    />
                    <path
                      d="M21.1304 19.8012H18.0688L18.9484 18.2619C19.3383 17.5795 18.8456 16.7305 18.0597 16.7305H17.0361V12.6362C17.0361 11.5866 15.6446 11.2171 15.1239 12.1284L10.7395 19.8012H7.8241C6.12821 19.8012 4.75342 18.4264 4.75342 16.7305C4.75342 15.3921 5.60962 14.2538 6.80415 13.8333C6.80175 13.7757 6.80054 13.7179 6.80054 13.6598C6.80054 11.3986 8.63359 9.56556 10.8948 9.56556C10.9653 9.56556 11.0355 9.56734 11.1052 9.57087C11.7717 7.20526 13.9456 5.47132 16.5244 5.47132C19.6335 5.47132 22.1539 7.99177 22.1539 11.1009C22.1539 11.3145 22.142 11.5254 22.1189 11.7328C23.9025 12.175 25.2246 13.7866 25.2246 15.7069C25.2246 17.9681 23.3916 19.8012 21.1304 19.8012Z"
                      fill="white"
                    />
                    <path
                      d="M11.9183 19.8012H13.9655V24.919L18.0597 17.754H16.0126V12.6362L11.9183 19.8012Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_103_2498">
                      <rect
                        width="24.5654"
                        height="24.5654"
                        fill="white"
                        transform="translate(0.65918 0.353516)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span className="w-[39.895px] h-2.5 font-[Inter] text-[8.188481330871582px] font-normal leading-[9.91px] text-[#fff] absolute top-[7.816px] left-[70.762px] text-center z-[27] break-words">
                  12km/h
                </span>
                <span className="w-[39.895px] h-2.5 font-[Inter] text-[8.188481330871582px] font-normal leading-[9.91px] text-[#fff] absolute top-[19.075px] left-[70.762px] text-center z-[28] break-words">
                  00:00
                </span>
                <div className="w-6 h-6 absolute top-0 left-[236.99px] z-[29]">
                  <div className="w-[83.33%] h-[79.17%]  bg-[length:100%_100%] bg-no-repeat absolute top-[12.5%] left-[8.33%] z-30" />
                </div>
                <div className="w-6 h-6 absolute top-[0.55px] left-[300.615px] z-[31]">
                  <div className="w-[83.33%] h-[79.17%]  bg-[length:100%_100%] bg-no-repeat absolute top-[12.5%] left-[8.33%] z-[32]" />
                </div>
              </div>
              <div className="flex w-[101.895px] h-2.5 justify-between items-center absolute top-[188px] left-[321px] z-[33]">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[-20px] left-[10px] z-[33]"
                >
                  <path
                    d="M15.9016 18.2039H18.9631C21.2243 18.2039 23.0574 16.3708 23.0574 14.1096C23.0574 12.1893 21.7353 10.5777 19.9516 10.1355C19.9748 9.92807 19.9867 9.71723 19.9867 9.5036C19.9867 6.39447 17.4663 3.87402 14.3571 3.87402C11.7783 3.87402 9.60451 5.60797 8.93795 7.97358C8.86826 7.97005 8.79811 7.96826 8.72754 7.96826C6.46636 7.96826 4.6333 9.80132 4.6333 12.0625C4.6333 12.1206 4.63451 12.1784 4.63691 12.236C3.44238 12.6565 2.58618 13.7948 2.58618 15.1332C2.58618 16.8291 3.96097 18.2039 5.65686 18.2039H8.57222L12.9566 10.5311C13.4774 9.61979 14.8689 9.98932 14.8689 11.0389V15.1332H15.8925C16.6784 15.1332 17.1711 15.9822 16.7812 16.6646L15.9016 18.2039Z"
                    fill="white"
                  />
                  <path
                    d="M9.7511 18.2039L13.8453 11.0389V16.1567H15.8925L11.7982 23.3217V18.2039H9.7511Z"
                    fill="white"
                  />
                </svg>
                <span className="w-[39.895px] h-2.5 shrink-0 font-[Inter] text-[8.188481330871582px] font-normal leading-[9.91px] text-[#fff] text-center break-words">
                  15km/h
                </span>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[-20px] left-[70px] z-[33]"
                >
                  <path
                    d="M15.9016 18.2039H18.9631C21.2243 18.2039 23.0574 16.3708 23.0574 14.1096C23.0574 12.1893 21.7353 10.5777 19.9516 10.1355C19.9748 9.92807 19.9867 9.71723 19.9867 9.5036C19.9867 6.39447 17.4663 3.87402 14.3571 3.87402C11.7783 3.87402 9.60451 5.60797 8.93795 7.97358C8.86826 7.97005 8.79811 7.96826 8.72754 7.96826C6.46636 7.96826 4.6333 9.80132 4.6333 12.0625C4.6333 12.1206 4.63451 12.1784 4.63691 12.236C3.44238 12.6565 2.58618 13.7948 2.58618 15.1332C2.58618 16.8291 3.96097 18.2039 5.65686 18.2039H8.57222L12.9566 10.5311C13.4774 9.61979 14.8689 9.98932 14.8689 11.0389V15.1332H15.8925C16.6784 15.1332 17.1711 15.9822 16.7812 16.6646L15.9016 18.2039Z"
                    fill="white"
                  />
                  <path
                    d="M9.7511 18.2039L13.8453 11.0389V16.1567H15.8925L11.7982 23.3217V18.2039H9.7511Z"
                    fill="white"
                  />
                </svg>
                <span className="w-[39.895px] h-2.5 shrink-0 font-[Inter] text-[8.188481330871582px] font-normal leading-[9.91px] text-[#fff] text-center break-words">
                  15km/h
                </span>
              </div>
              <div className="flex w-[101.895px] h-2.5 justify-between items-center absolute top-[199.259px] left-[321px] z-[34]">
                <span className="w-[39.895px] h-2.5 shrink-0 font-[Inter] text-[8.188481330871582px] font-normal leading-[9.91px] text-[#fff] text-center break-words">
                  2:00
                </span>
                <span className="w-[39.895px] h-2.5 shrink-0 font-[Inter] text-[8.188481330871582px] font-normal leading-[9.91px] text-[#fff] text-center break-words">
                  4:00
                </span>
              </div>
              <svg
                width="474"
                height="67"
                viewBox="0 0 478 67"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[90px] left-0 z-[35]"
              >
                <path
                  d="M-1 2C-1 2 50.8156 7.10859 83.3738 18.5496C108.432 27.355 121.469 44.9506 146.654 48.5457C171.839 52.1407 185.785 37.4919 211.045 37.1679C242.491 36.7644 259.711 50.8308 291.146 52.4945C327.64 54.4259 348.002 39.5982 384.478 42.4904C419.872 45.2968 442.57 50.5314 477 66"
                  stroke="#FF6E6E"
                  strokeWidth="2.04712"
                />
              </svg>
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-center gap-6 inline-flex sm:mt-4">
            <div className="w-[704px] grow shrink basis-0 p-6 bg-white bg-opacity-5 rounded-3xl border border-white flex-col justify-center items-start gap-[55px] flex">
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 left-0 top-[-0px] absolute"></div>
                  </div>
                  <div className="text-white text-2xl font-normal font-['Sora'] leading-10">
                    Pest Control
                  </div>
                </div>
                <div className="w-[595px] text-white text-base font-normal font-['Montserrat'] leading-[29.50px]">
                  Monitors various data sources to provide real-time alerts
                  about potential pest threats in the farmers region. This
                  includes information about the types of pests, severity
                  levels, and recommended actions to mitigate the risks.
                </div>
              </div>
              <div className="justify-start items-end gap-3 inline-flex">
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <div className="flex-col justify-start items-start gap-[38px] flex">
                    <div className="justify-start items-center gap-[9px] inline-flex">
                      <div className="text-white text-lg font-medium font-['Inter']">
                        Severity
                      </div>
                      <div className="justify-start items-center gap-1.5 flex">
                        <div className="w-4 h-4 bg-red-600 rounded-full" />
                        <div className="text-white text-base font-normal font-['Inter']">
                          High Alert
                        </div>
                      </div>
                    </div>
                    <div className="h-28 pl-8 pr-12 py-6 bg-white bg-opacity-5 rounded-3xl flex-col justify-center items-start gap-1 flex">
                      <div className="justify-start items-center gap-[9px] inline-flex">
                        <div className="text-white text-lg font-medium font-['Inter']">
                          Location:
                        </div>
                        <div className="justify-start items-start gap-1.5 flex">
                          <div className="text-white text-base font-normal font-['Inter']">
                            Nassarawa
                          </div>
                        </div>
                      </div>
                      <div className="text-white text-base font-normal font-['Inter']">
                        Latitude: 37.7749
                        <br />
                        Longitude: -122.4194
                      </div>
                    </div>
                  </div>
                  <div className="pl-8 pr-12 py-6 bg-white bg-opacity-5 rounded-3xl flex-col justify-center items-start gap-1 flex">
                    <h3 className="text-white text-2xl font-medium font-['Inter']">
                      Pest Idenity
                    </h3>
                    <div className="justify-start items-end gap-[11px] inline-flex">
                      <div className="justify-start items-center flex gap-[9px] flex">
                        <h3 className="text-white text-2xl font-medium font-['Inter']">
                          Pest: Type:
                        </h3>
                        <div className="justify-start items-start gap-1.5 flex">
                          <div className="text-white text-base font-normal font-['Inter']">
                            Rodent (rat){" "}
                            <svg
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_103_2554)">
                                <path
                                  d="M17.0545 10.6055C13.9471 10.6055 11.89 11.7177 10.3559 14.2232C9.89236 14.9804 9.98457 16.0162 10.1355 16.4867C10.2119 16.7248 10.3174 16.9238 10.4267 17.0855C10.8928 17.7739 11.717 18.1844 12.6315 18.1844H14.1978C14.225 18.6038 14.1517 18.9992 13.8429 19.4495C13.5454 19.884 12.9568 20.3905 12.5229 20.7341C13.1147 20.7183 13.7583 20.7107 14.4738 20.7107C20.566 20.7107 22.7368 17.1859 22.7368 13.8872C21.9473 12.5002 20.6804 10.6055 17.0545 10.6055Z"
                                  fill="#FF6E6E"
                                />
                                <path
                                  d="M4.93208 24.2396L3.91081 23.4968C6.41755 20.0503 8.25418 19.4844 13.8443 19.449C14.3458 18.7164 14.2251 18.1303 14.0641 17.3465C13.9807 16.9448 13.8948 16.5299 13.8948 16.0707C13.8948 14.4545 14.4885 13.6183 15.3809 12.8604L16.1988 13.8223C15.5085 14.4097 15.158 14.9187 15.158 16.0707C15.158 16.401 15.2268 16.7364 15.3001 17.0914C15.4384 17.7596 15.6001 18.5453 15.2736 19.4225C19.1729 19.1825 21.4738 17.1514 21.4738 13.8867C21.4738 10.3044 19.3965 8.07873 16.0529 8.07873C14.0925 8.07873 12.4599 8.77473 11.9704 9.00715C11.8307 9.26495 11.6697 9.51065 11.4891 9.74168L10.5108 8.9421L11.0003 9.34189L10.5102 8.94399C10.5184 8.93326 11.3685 7.86589 11.3685 6.65768C11.3685 5.84168 11.1588 5.23347 10.7458 4.85136C10.3352 4.47052 9.69608 4.27473 8.84218 4.26652V8.07873H7.57902V3.07284L8.16197 3.02799C9.67839 2.91241 10.8361 3.21305 11.6041 3.9242C12.2862 4.55578 12.6317 5.47536 12.6317 6.65768C12.6317 6.91789 12.6051 7.17115 12.5597 7.41241C13.4331 7.11747 14.6653 6.81557 16.0529 6.81557C20.1133 6.81557 22.7369 9.59136 22.7369 13.8867C22.7369 17.1855 20.5662 20.7103 14.474 20.7103C8.41145 20.7103 7.16281 21.172 4.93208 24.2396ZM5.37987 18.22C5.09755 18.22 4.80829 18.2067 4.51208 18.1815L3.99418 18.1379L3.93734 17.6219C3.93166 17.5657 3.78955 16.2602 3.78955 15.2895C3.78955 12.8617 4.29229 11.0964 5.05271 9.2181V3.0261H6.31587V9.46631L6.2685 9.58126C5.51818 11.416 5.05271 13.0107 5.05271 15.2895C5.05271 15.8257 5.10197 16.4952 5.14239 16.953C7.4786 17.0187 9.19271 16.1232 10.3561 14.2227L11.4816 14.7874C11.2182 15.4467 11.215 15.9962 11.4727 16.3777C11.7001 16.7124 12.1441 16.9208 12.6317 16.9208V18.184C11.7171 18.184 10.8929 17.7735 10.4268 17.085C10.3018 16.9003 10.2038 16.6987 10.1357 16.4863C8.88829 17.6389 7.29671 18.2194 5.37987 18.22ZM8.90534 12.8156C8.90534 12.0135 8.59524 11.7735 8.2106 11.7735C7.82597 11.7735 7.51587 12.0135 7.51587 12.8156C7.51587 13.6183 7.82597 13.8577 8.2106 13.8577C8.59524 13.8577 8.90534 13.6183 8.90534 12.8156Z"
                                  fill="white"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_103_2554">
                                  <rect
                                    width="24"
                                    height="24"
                                    fill="white"
                                    transform="translate(0 0.5)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <div className="h-[183px] pl-8 pr-12 py-6 bg-white bg-opacity-5 rounded-3xl flex-col justify-center items-start gap-1 flex">
                    <div className="justify-start items-center gap-[9px] inline-flex">
                      <div className="text-white text-base font-normal font-['Inter']">
                        Additional Notes:
                      </div>
                    </div>
                    <div className="w-[263px] text-white text-[13px] font-normal font-['Inter']">
                      Farmers in the identified region have reported an increase
                      in rat activity, causing potential threats to crops and
                      stored produce.
                      <br />
                      Rats have been observed damaging crops and may lead to
                      significant losses if not addressed promptly.
                    </div>
                  </div>
                  <div className="h-[65px] pl-8 pr-12 py-6 bg-white bg-opacity-5 rounded-3xl flex-col justify-center items-start gap-1 flex">
                    <div className="justify-start items-center gap-[9px] inline-flex">
                      <div className="text-white text-sm font-normal font-['Inter']">
                        Click to read read full information about the pest
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[8rem]">
        <div className="text-white text-2xl text-center font-normal font-['Montserrat'] underline leading-[29.50px]">
          Get Started and start making informed decisions
        </div>

        <div className="lg:flex justify-between gap-4 mt-[6rem]">
          <Image
            className="w-[400.14px] h-[550.25px] rounded-3xl ml-6"
            src="/crop-ai.png"
            width={400}
            alt="Crop AI"
            height={550}
          />
          <div className="w-[780px] h-[638px] flex-col justify-start items-start gap-6 inline-flex">
            <div className="flex-col justify-start items-start gap-14 flex">
              <div className="pb-6 border-b border-slate-500 flex-col justify-start items-start gap-2 flex">
                <div className="flex-col justify-start items-start gap-px flex">
                  <div className="text-slate-500 text-5xl font-bold font-['Sora'] leading-10">
                    1
                  </div>
                  <div className="text-white text-[32px] font-normal font-['Sora'] leading-10">
                    Optimize Your Yield with AI!
                  </div>
                  <div className="text-white text-base font-normal font-['Montserrat'] leading-[29.50px]">
                    Encourage users to experience the AI guidance for enhanced
                    crop management.
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[195px] pb-6 border-b border-slate-500 flex-col justify-start items-start gap-2 flex">
                <div className="flex-col justify-start items-start gap-px flex">
                  <div className="text-slate-500 text-5xl font-semibold font-['Sora'] leading-10">
                    2
                  </div>
                  <div className="text-white text-[32px] font-normal font-['Sora'] leading-10">
                    Real-Time Decision Support
                  </div>
                  <div className="text-white text-base font-normal font-['Montserrat'] leading-[29.50px]">
                    This proactive approach empowers farmers to make timely
                    decisions, <br />
                    allowing them to protect their crops effectively and adapt
                    their farming <br />
                    practices based on the latest information.
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="flex-col justify-start items-start gap-px flex">
                  <div className="text-slate-500 text-5xl font-semibold font-['Sora'] leading-10">
                    3
                  </div>
                  <div className="text-white text-[32px] font-normal font-['Sora'] leading-10">
                    Optimized Crop Management
                  </div>
                  <div className="w-[780px] text-white text-base font-normal font-['Montserrat'] leading-[29.50px]">
                    Farmers benefit from optimized planting schedules,
                    irrigation plans, and pest control strategies, ultimately
                    leading to increased crop yields and improved overall farm
                    productivity.
                  </div>
                </div>
              </div>
            </div>
            <Button text="Get started" />
          </div>
        </div>
      </section>

      <section className="mt-[5rem] w-[1280px] h-[444px] relative bg-emerald-900 rounded-3xl">
        <div className="left-[405px] top-[92px] absolute text-white text-[32px] font-normal font-['Sora'] leading-[29.50px]">
          Start Enjoying Agricultural AI
        </div>
        <div className="w-[316px] h-[316px] left-[35px] top-[337px] absolute bg-red-400 rounded-full blur-[400px]" />
        <div className="w-[316px] h-[316px] left-[405px] top-[337px] absolute bg-red-400 rounded-full blur-[400px]" />
        <div className="w-[316px] h-[316px] left-[640px] top-[337px] absolute bg-red-400 rounded-full blur-[400px]" />
        <div className="w-[316px] h-[316px] left-[830px] top-[337px] absolute bg-red-400 rounded-full blur-[400px]" />
        <div className="w-[316px] h-[316px] left-[964px] top-[337px] absolute bg-red-400 rounded-full blur-[400px]" />
        <div className="w-[622px] left-[346px] top-[133px] absolute text-center text-white text-base font-normal font-['Montserrat'] leading-[29.50px]">
          We are committed to empowering farmers with the tools they need to
          thrive in a dynamic agricultural landscape. Join us in harnessing the
          power of AI for a more sustainable and prosperous future.
        </div>
        <div className="left-[482px] top-[251px] absolute justify-start items-start gap-[13px] inline-flex">
          <Button text="Learn more" />
          <Button text="Get started" bg="bg-[#008148]" />
        </div>
      </section>

      <footer className="mt-6">
        <Image
          alt="footer vector"
          src="/home-vector.png"
          className="w-full h-full"
          width={500}
          height={400}
        />
      </footer>
    </main>
  );
}
