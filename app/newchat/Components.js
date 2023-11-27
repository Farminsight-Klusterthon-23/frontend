'use client'

import { DefaultUserAvatar } from "../_components/ChatSvgs";

export default function TopInput () {
    return(
        <section className=" w-full h-12 bg-white rounded-lg flex justify-between shadow-lg my-4 md:w-full">
        <div className="relative mr-2">
          <input
            placeholder="New Chat"
            type="text"
            id="newChat"
            name="newChat"
            className="pl-10 py-4 px-3 rounded-md !outline-none border-none focus:border-transparent focus:ring-0"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-orangeColor pointer-events-none">
            <MessageSvg />
          </div>
        </div>
        <div className="relative flex -left-24 md:left-0">
          <div className="flex">
            <ChatAiSvg />
            <p className="hidden md:block mt-3 font-bold">Chat</p>
          </div>
          <OfflineSvg />
          <p className="hidden md:block mt-3 font-bold mr-2">Offline</p>
        </div>
      </section>
    )
}

export function ChatHeader() {
    return(
        <section className="flex justify-between items-center bg-white/20 ">
        <h2 className="ml-48 font-bold">Home</h2>
        <div className="flex items-center justify-around">
          <BellSVG />
          <SettingSvg />
          <ToggleSwitch />
        </div>
      </section>
    )
}

export function TextArea() {
    return (
        <form className="relative my-6">
        <textarea
        name="tellMeMore"
        // onChange={(e) => onChange(e.target.value)}
          title="Tell me more"
          placeholder="Tell me more"
          className="h-1 w-full block bg-secondary-contrast-text border border-secondary-dark rounded-[16px] pt-[41px] pb-[51px] px-[27px] text-base text-black font-normal"
        ></textarea>
        <button
          type="submit"
          className="absolute -mt-10 right-[20px] text-white font-bold text-center bg-gradient-to-r from-[#8054FF] to-[#0813FB] py-1 px-3 rounded-[8px]"
        >
          Send
        </button>
        <div className="absolute top-14 flex">
          <MicSvg />
          <PinSvg />
        </div>
      </form>
    )
}

export function ChatMessage() {
    return(
        <section className="w-2/3 text-xs text-gray-700 ">
           <TopInput />
           <section>
           <div className="flex justify-start items-center">
              <DefaultUserAvatar />
              <p className="px-2">
                What is the importance of phosphorus in plant growth.
              </p>
            </div>
            <hr className="mt-4 mb-6" />
            <hr className="my-4 mt-6" />

            <div className="flex justify-start items-center">
              <DefaultUserAvatar />
              <p className="px-2">Tell me about Snow Dashboard UI Kit.</p>
            </div>

            <hr className="mt-4 mb-6" />

            <div className="flex justify-start">
              <div>
                <GptSvg />
              </div>

              <p className="px-2">
                The Snow Dashboard UI Kit is a modern and clean user interface
                kit for building dashboard and admin panel interfaces. It comes
                with a collection of UI elements, widgets, forms, charts, and
                maps that can be combined to create a complete and
                professional-looking dashboard. The kit is designed with a
                simple, clean, and minimalist aesthetic that can be easily
                customized to fit the branding of any project. It is also built
                with HTML, CSS, and JavaScript, making it fully responsive and
                easy to use with any modern web development framework.
              </p>
            </div>

            <hr className="mt-4 mb-6" />

            <div className="flex justify-start items-center">
              <DefaultUserAvatar />
              <p className="px-2">
                As a designer, how can I use Snow Dashboard UI Kit to design?{" "}
              </p>
            </div>

            <hr className="mt-4 mb-6" />

            <div className="flex justify-center">
              <div>
                <GptSvg />
              </div>

              <p className="px-2">
                As a designer, the Snow Dashboard UI Kit can be used as a
                reference or a starting point for your own dashboard or admin
                panel project. Here are some ways you can use the kit as a
                designer: Review the design of the kit: Examine the design
                style, typography, color palette, and layout of the kit to get
                inspiration for your own project. 
              </p>
              <div className="flex">
                <CopySvg />
                <LikeSvg />
                <UnlikeSvg />
              </div>
            </div>
           </section>
           
            <TextArea />
          </section>
    )
}

function CopySvg() {
    return(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.125 11.8749C13.125 12.0406 13.0592 12.1996 12.9419 12.3168C12.8247 12.434 12.6658 12.4999 12.5 12.4999H7.5C7.33424 12.4999 7.17527 12.434 7.05806 12.3168C6.94085 12.1996 6.875 12.0406 6.875 11.8749C6.875 11.7091 6.94085 11.5502 7.05806 11.4329C7.17527 11.3157 7.33424 11.2499 7.5 11.2499H12.5C12.6658 11.2499 12.8247 11.3157 12.9419 11.4329C13.0592 11.5502 13.125 11.7091 13.125 11.8749ZM12.5 8.74989H7.5C7.33424 8.74989 7.17527 8.81573 7.05806 8.93295C6.94085 9.05016 6.875 9.20913 6.875 9.37489C6.875 9.54065 6.94085 9.69962 7.05806 9.81683C7.17527 9.93404 7.33424 9.99989 7.5 9.99989H12.5C12.6658 9.99989 12.8247 9.93404 12.9419 9.81683C13.0592 9.69962 13.125 9.54065 13.125 9.37489C13.125 9.20913 13.0592 9.05016 12.9419 8.93295C12.8247 8.81573 12.6658 8.74989 12.5 8.74989ZM16.875 3.74989V16.8749C16.875 17.2064 16.7433 17.5243 16.5089 17.7588C16.2745 17.9932 15.9565 18.1249 15.625 18.1249H4.375C4.04348 18.1249 3.72554 17.9932 3.49112 17.7588C3.2567 17.5243 3.125 17.2064 3.125 16.8749V3.74989C3.125 3.41837 3.2567 3.10042 3.49112 2.866C3.72554 2.63158 4.04348 2.49989 4.375 2.49989H7.20781C7.55899 2.1067 7.98924 1.79212 8.47041 1.57673C8.95158 1.36134 9.47282 1.25 10 1.25C10.5272 1.25 11.0484 1.36134 11.5296 1.57673C12.0108 1.79212 12.441 2.1067 12.7922 2.49989H15.625C15.9565 2.49989 16.2745 2.63158 16.5089 2.866C16.7433 3.10042 16.875 3.41837 16.875 3.74989ZM7.5 4.99989H12.5C12.5 4.33685 12.2366 3.70096 11.7678 3.23212C11.2989 2.76328 10.663 2.49989 10 2.49989C9.33696 2.49989 8.70107 2.76328 8.23223 3.23212C7.76339 3.70096 7.5 4.33685 7.5 4.99989ZM15.625 3.74989H13.5352C13.6773 4.15131 13.75 4.57403 13.75 4.99989V5.62489C13.75 5.79065 13.6842 5.94962 13.5669 6.06683C13.4497 6.18404 13.2908 6.24989 13.125 6.24989H6.875C6.70924 6.24989 6.55027 6.18404 6.43306 6.06683C6.31585 5.94962 6.25 5.79065 6.25 5.62489V4.99989C6.25001 4.57403 6.32267 4.15131 6.46484 3.74989H4.375V16.8749H15.625V3.74989Z" fill="#1C1C1C" fill-opacity="0.4"/>
</svg>
    )
}

function LikeSvg() {
    return(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.2812 6.25938C18.1053 6.05994 17.8888 5.90023 17.6464 5.79086C17.4039 5.68148 17.141 5.62495 16.875 5.625H12.5V4.375C12.5 3.5462 12.1708 2.75134 11.5847 2.16529C10.9987 1.57924 10.2038 1.25 9.375 1.25C9.25889 1.24992 9.14505 1.28218 9.04625 1.34317C8.94744 1.40417 8.86758 1.49148 8.81562 1.59531L5.86406 7.5H2.5C2.16848 7.5 1.85054 7.6317 1.61612 7.86612C1.3817 8.10054 1.25 8.41848 1.25 8.75V15.625C1.25 15.9565 1.3817 16.2745 1.61612 16.5089C1.85054 16.7433 2.16848 16.875 2.5 16.875H15.9375C16.3943 16.8752 16.8354 16.7085 17.1781 16.4065C17.5208 16.1044 17.7413 15.6876 17.7984 15.2344L18.7359 7.73438C18.7692 7.47033 18.7458 7.20224 18.6674 6.94792C18.589 6.6936 18.4574 6.45888 18.2812 6.25938ZM2.5 8.75H5.625V15.625H2.5V8.75ZM17.4953 7.57812L16.5578 15.0781C16.5388 15.2292 16.4653 15.3681 16.351 15.4688C16.2368 15.5695 16.0898 15.6251 15.9375 15.625H6.875V8.27266L9.74297 2.53594C10.168 2.62101 10.5505 2.85075 10.8253 3.18605C11.1 3.52135 11.2501 3.9415 11.25 4.375V6.25C11.25 6.41576 11.3158 6.57473 11.4331 6.69194C11.5503 6.80915 11.7092 6.875 11.875 6.875H16.875C16.9637 6.87497 17.0514 6.89382 17.1322 6.93028C17.2131 6.96675 17.2852 7.02001 17.3439 7.08652C17.4026 7.15303 17.4464 7.23126 17.4725 7.31602C17.4986 7.40078 17.5064 7.49013 17.4953 7.57812Z" fill="#1C1C1C" fill-opacity="0.4"/>
        </svg>        
    )
}

function UnlikeSvg() {
    return(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.7359 12.2656L17.7984 4.76563C17.7413 4.31241 17.5208 3.89562 17.1781 3.59354C16.8354 3.29145 16.3943 3.12484 15.9375 3.125H2.5C2.16848 3.125 1.85054 3.2567 1.61612 3.49112C1.3817 3.72554 1.25 4.04348 1.25 4.375V11.25C1.25 11.5815 1.3817 11.8995 1.61612 12.1339C1.85054 12.3683 2.16848 12.5 2.5 12.5H5.86406L8.81563 18.4047C8.86759 18.5085 8.94744 18.5958 9.04625 18.6568C9.14505 18.7178 9.25889 18.7501 9.375 18.75C10.2038 18.75 10.9987 18.4208 11.5847 17.8347C12.1708 17.2487 12.5 16.4538 12.5 15.625V14.375H16.875C17.1411 14.3751 17.4041 14.3186 17.6467 14.2091C17.8892 14.0997 18.1057 13.94 18.2817 13.7404C18.4577 13.5409 18.5892 13.3062 18.6676 13.0519C18.7459 12.7976 18.7692 12.5296 18.7359 12.2656ZM5.625 11.25H2.5V4.375H5.625V11.25ZM17.3438 12.9133C17.2855 12.9803 17.2135 13.0339 17.1325 13.0704C17.0516 13.107 16.9638 13.1256 16.875 13.125H11.875C11.7092 13.125 11.5503 13.1908 11.4331 13.3081C11.3158 13.4253 11.25 13.5842 11.25 13.75V15.625C11.2501 16.0585 11.1 16.4787 10.8253 16.814C10.5505 17.1493 10.168 17.379 9.74297 17.4641L6.875 11.7273V4.375H15.9375C16.0898 4.37495 16.2368 4.43048 16.351 4.53118C16.4653 4.63187 16.5388 4.7708 16.5578 4.92188L17.4953 12.4219C17.507 12.5099 17.4995 12.5994 17.4734 12.6842C17.4472 12.769 17.403 12.8472 17.3438 12.9133Z" fill="#1C1C1C" fill-opacity="0.4"/>
        </svg>        
    )
}

function ChatAiSvg() {
    return (
      <svg
        width="97"
        height="101"
        viewBox="0 0 97 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="29"
          width="39"
          height="39"
          rx="19.5"
          fill="url(#paint0_linear_300_7647)"
        />
        <g filter="url(#filter0_d_300_7647)">
          <path
            d="M53.6937 16.1205C53.6322 16.1205 53.58 16.1078 53.5369 16.0823C53.4938 16.0569 53.46 16.0123 53.4354 15.9487L52.9004 14.6504L51.5535 14.0394C51.492 14.0139 51.449 13.9789 51.4244 13.9344C51.3998 13.8898 51.3875 13.8357 51.3875 13.7721C51.3875 13.7084 51.3998 13.6543 51.4244 13.6098C51.449 13.5652 51.492 13.5302 51.5535 13.5048L52.9004 12.9129L53.4354 11.6718C53.46 11.6082 53.4938 11.5636 53.5369 11.5382C53.58 11.5127 53.6322 11.5 53.6937 11.5C53.7552 11.5 53.8075 11.5127 53.8506 11.5382C53.8936 11.5636 53.9274 11.6082 53.952 11.6718L54.4871 12.9129L55.8339 13.5048C55.8954 13.5302 55.9385 13.5652 55.9631 13.6098C55.9877 13.6543 56 13.7084 56 13.7721C56 13.8357 55.9877 13.8898 55.9631 13.9344C55.9385 13.9789 55.8954 14.0139 55.8339 14.0394L54.4871 14.6504L53.952 15.9487C53.9274 16.0123 53.8936 16.0569 53.8506 16.0823C53.8075 16.1078 53.7552 16.1205 53.6937 16.1205ZM53.6937 27.5C53.6445 27.5 53.5953 27.4873 53.5461 27.4618C53.4969 27.4364 53.46 27.3918 53.4354 27.3282L52.9004 26.0871L51.572 25.4952C51.5105 25.4698 51.4674 25.4348 51.4428 25.3902C51.4182 25.3457 51.4059 25.2916 51.4059 25.2279C51.4059 25.1643 51.4182 25.1102 51.4428 25.0656C51.4674 25.0211 51.5105 24.9861 51.572 24.9606L52.9004 24.3687L53.4354 23.0513C53.46 22.9877 53.4938 22.9431 53.5369 22.9177C53.58 22.8922 53.6322 22.8795 53.6937 22.8795C53.7552 22.8795 53.8075 22.8922 53.8506 22.9177C53.8936 22.9431 53.9274 22.9877 53.952 23.0513L54.4871 24.3687L55.8155 24.9606C55.877 24.9861 55.92 25.0211 55.9446 25.0656C55.9692 25.1102 55.9815 25.1643 55.9815 25.2279C55.9815 25.2916 55.9692 25.3457 55.9446 25.3902C55.92 25.4348 55.877 25.4698 55.8155 25.4952L54.4871 26.0871L53.952 27.3282C53.9274 27.3918 53.8905 27.4364 53.8413 27.4618C53.7921 27.4873 53.7429 27.5 53.6937 27.5ZM45.5941 24.1969C45.4957 24.1969 45.4004 24.1683 45.3081 24.111C45.2159 24.0537 45.1451 23.9741 45.0959 23.8723L43.8967 21.2184L41.3137 20.0155C41.2153 19.9646 41.1384 19.8914 41.083 19.7959C41.0277 19.7005 41 19.6018 41 19.5C41 19.3982 41.0277 19.2995 41.083 19.2041C41.1384 19.1086 41.2153 19.0354 41.3137 18.9845L43.8967 17.7816L45.0959 15.1468C45.1451 15.0322 45.2159 14.9463 45.3081 14.889C45.4004 14.8317 45.4957 14.8031 45.5941 14.8031C45.6925 14.8031 45.7878 14.8317 45.8801 14.889C45.9723 14.9463 46.0431 15.0259 46.0923 15.1277L47.31 17.7816L49.8745 18.9845C49.9852 19.0354 50.0683 19.1086 50.1236 19.2041C50.179 19.2995 50.2066 19.3982 50.2066 19.5C50.2066 19.6018 50.179 19.7005 50.1236 19.7959C50.0683 19.8914 49.9852 19.9646 49.8745 20.0155L47.31 21.2184L46.0923 23.8723C46.0431 23.9869 45.9723 24.0696 45.8801 24.1205C45.7878 24.1714 45.6925 24.1969 45.5941 24.1969Z"
            fill="#034732"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_300_7647"
            x="0.0499992"
            y="3.05"
            width="96.9"
            height="97.9"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="32.5" />
            <feGaussianBlur stdDeviation="20.475" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.262745 0 0 0 0 0.0941176 0 0 0 0 1 0 0 0 0.28 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_300_7647"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_300_7647"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_300_7647"
            x1="48.5"
            y1="0"
            x2="48.5"
            y2="39"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFF1F1" />
            <stop offset="1" stop-color="#FD9797" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

function MessageSvg() {
    return (
      <svg
        width="32"
        height="33"
        viewBox="0 0 32 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 14.5C21 14.7652 20.8946 15.0196 20.7071 15.2071C20.5196 15.3946 20.2652 15.5 20 15.5H12C11.7348 15.5 11.4804 15.3946 11.2929 15.2071C11.1054 15.0196 11 14.7652 11 14.5C11 14.2348 11.1054 13.9804 11.2929 13.7929C11.4804 13.6054 11.7348 13.5 12 13.5H20C20.2652 13.5 20.5196 13.6054 20.7071 13.7929C20.8946 13.9804 21 14.2348 21 14.5ZM20 17.5H12C11.7348 17.5 11.4804 17.6054 11.2929 17.7929C11.1054 17.9804 11 18.2348 11 18.5C11 18.7652 11.1054 19.0196 11.2929 19.2071C11.4804 19.3946 11.7348 19.5 12 19.5H20C20.2652 19.5 20.5196 19.3946 20.7071 19.2071C20.8946 19.0196 21 18.7652 21 18.5C21 18.2348 20.8946 17.9804 20.7071 17.7929C20.5196 17.6054 20.2652 17.5 20 17.5ZM29 16C28.9964 19.3141 27.6782 22.4914 25.3348 24.8348C22.9914 27.1782 19.8141 28.4964 16.5 28.5H5.95875C5.43946 28.4993 4.94163 28.2928 4.57444 27.9256C4.20724 27.5584 4.00066 27.0605 4 26.5413V16C4 12.6848 5.31696 9.50537 7.66117 7.16116C10.0054 4.81696 13.1848 3.5 16.5 3.5C19.8152 3.5 22.9946 4.81696 25.3388 7.16116C27.683 9.50537 29 12.6848 29 16ZM27 16C27 13.2152 25.8938 10.5445 23.9246 8.57538C21.9555 6.60625 19.2848 5.5 16.5 5.5C13.7152 5.5 11.0445 6.60625 9.07538 8.57538C7.10625 10.5445 6 13.2152 6 16V26.5H16.5C19.2839 26.497 21.9528 25.3898 23.9213 23.4213C25.8898 21.4528 26.997 18.7839 27 16Z"
          fill="#1C1C1C"
        />
      </svg>
    );
  }

function OfflineSvg() {
    return (
      <svg
        width="93"
        height="101"
        viewBox="0 0 93 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="27"
          width="39"
          height="39"
          rx="19.5"
          fill="url(#paint0_linear_300_7652)"
        />
        <g filter="url(#filter0_d_300_7652)">
          <path
            d="M44.5087 21.5878H41.5617C41.3401 21.5878 41.1761 21.4908 41.0697 21.2967C40.9634 21.1026 40.9787 20.9129 41.1157 20.7276L47.4289 11.7832C47.5224 11.66 47.6394 11.5755 47.7797 11.5297C47.92 11.484 48.0604 11.491 48.2007 11.551C48.341 11.6055 48.4521 11.6971 48.534 11.8258C48.6158 11.9544 48.6451 12.0918 48.6217 12.2379L47.8582 18.1861H51.43C51.6717 18.1861 51.8421 18.2902 51.9412 18.4985C52.0403 18.7067 52.0141 18.9035 51.8627 19.0889L44.908 27.258C44.8144 27.3725 44.6938 27.4469 44.5463 27.4812C44.3987 27.5156 44.262 27.5028 44.1361 27.4428C44.0047 27.3883 43.9031 27.2994 43.8312 27.1762C43.7594 27.053 43.7324 26.9156 43.7502 26.7641L44.5087 21.5878Z"
            fill="#603CFF"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_300_7652"
            x="0.0499992"
            y="3.05"
            width="92.9"
            height="97.9"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="32.5" />
            <feGaussianBlur stdDeviation="20.475" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.262745 0 0 0 0 0.0941176 0 0 0 0 1 0 0 0 0.28 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_300_7652"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_300_7652"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_300_7652"
            x1="46.5"
            y1="0"
            x2="46.5"
            y2="39"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FBFBFF" />
            <stop offset="1" stop-color="#CACAFF" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  function MicSvg() {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 13.75C10.9942 13.749 11.9475 13.3535 12.6505 12.6505C13.3535 11.9475 13.749 10.9942 13.75 10V5C13.75 4.00544 13.3549 3.05161 12.6517 2.34835C11.9484 1.64509 10.9946 1.25 10 1.25C9.00544 1.25 8.05161 1.64509 7.34835 2.34835C6.64509 3.05161 6.25 4.00544 6.25 5V10C6.25103 10.9942 6.64645 11.9475 7.34949 12.6505C8.05253 13.3535 9.00576 13.749 10 13.75ZM7.5 5C7.5 4.33696 7.76339 3.70107 8.23223 3.23223C8.70107 2.76339 9.33696 2.5 10 2.5C10.663 2.5 11.2989 2.76339 11.7678 3.23223C12.2366 3.70107 12.5 4.33696 12.5 5V10C12.5 10.663 12.2366 11.2989 11.7678 11.7678C11.2989 12.2366 10.663 12.5 10 12.5C9.33696 12.5 8.70107 12.2366 8.23223 11.7678C7.76339 11.2989 7.5 10.663 7.5 10V5ZM10.625 16.2188V18.125C10.625 18.2908 10.5592 18.4497 10.4419 18.5669C10.3247 18.6842 10.1658 18.75 10 18.75C9.83424 18.75 9.67527 18.6842 9.55806 18.5669C9.44085 18.4497 9.375 18.2908 9.375 18.125V16.2188C7.8341 16.062 6.40607 15.3393 5.36707 14.1907C4.32806 13.042 3.7519 11.5489 3.75 10C3.75 9.83424 3.81585 9.67527 3.93306 9.55806C4.05027 9.44085 4.20924 9.375 4.375 9.375C4.54076 9.375 4.69973 9.44085 4.81694 9.55806C4.93415 9.67527 5 9.83424 5 10C5 11.3261 5.52678 12.5979 6.46447 13.5355C7.40215 14.4732 8.67392 15 10 15C11.3261 15 12.5979 14.4732 13.5355 13.5355C14.4732 12.5979 15 11.3261 15 10C15 9.83424 15.0658 9.67527 15.1831 9.55806C15.3003 9.44085 15.4592 9.375 15.625 9.375C15.7908 9.375 15.9497 9.44085 16.0669 9.55806C16.1842 9.67527 16.25 9.83424 16.25 10C16.2481 11.5489 15.6719 13.042 14.6329 14.1907C13.5939 15.3393 12.1659 16.062 10.625 16.2188Z"
          fill="#1C1C1C"
        />
      </svg>
    );
  }
  
  function PinSvg() {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.3799 9.55805C16.438 9.6161 16.4841 9.68503 16.5156 9.7609C16.547 9.83678 16.5632 9.91811 16.5632 10.0002C16.5632 10.0824 16.547 10.1637 16.5156 10.2396C16.4841 10.3155 16.438 10.3844 16.3799 10.4424L9.96974 16.8487C9.14912 17.6692 8.03617 18.1301 6.87571 18.13C5.71526 18.13 4.60236 17.6689 3.78185 16.8483C2.96133 16.0277 2.50042 14.9147 2.50049 13.7543C2.50056 12.5938 2.96162 11.4809 3.78224 10.6604L11.5369 2.79165C12.1228 2.20517 12.9176 1.87544 13.7466 1.875C14.5756 1.87456 15.3708 2.20345 15.9572 2.78931C16.5437 3.37516 16.8734 4.17001 16.8739 4.99898C16.8743 5.82795 16.5454 6.62314 15.9596 7.20962L8.20333 15.0784C7.85109 15.4306 7.37335 15.6285 6.87521 15.6285C6.37706 15.6285 5.89932 15.4306 5.54708 15.0784C5.19484 14.7261 4.99695 14.2484 4.99695 13.7502C4.99695 13.2521 5.19484 12.7744 5.54708 12.4221L12.0549 5.81118C12.1119 5.75037 12.1805 5.70157 12.2566 5.66766C12.3328 5.63376 12.415 5.61543 12.4983 5.61375C12.5816 5.61207 12.6645 5.62708 12.7419 5.6579C12.8194 5.68871 12.8899 5.73471 12.9493 5.79318C13.0087 5.85165 13.0558 5.92141 13.0879 5.99836C13.1199 6.07531 13.1362 6.1579 13.1359 6.24125C13.1355 6.32461 13.1185 6.40705 13.0858 6.48373C13.0531 6.56041 13.0054 6.62977 12.9455 6.68774L6.43692 13.3057C6.37865 13.3635 6.33233 13.4322 6.30062 13.508C6.26891 13.5837 6.25241 13.6649 6.25209 13.747C6.25176 13.8291 6.26761 13.9104 6.29872 13.9864C6.32983 14.0623 6.3756 14.1314 6.43341 14.1897C6.49122 14.248 6.55995 14.2943 6.63566 14.326C6.71137 14.3577 6.79259 14.3742 6.87467 14.3745C6.95676 14.3749 7.0381 14.359 7.11407 14.3279C7.19003 14.2968 7.25912 14.251 7.31739 14.1932L15.0729 6.32837C15.4251 5.97685 15.6233 5.49981 15.6238 5.00218C15.6243 4.50455 15.4271 4.02709 15.0756 3.67485C14.7241 3.32261 14.247 3.12444 13.7494 3.12392C13.2518 3.12341 12.7743 3.3206 12.4221 3.67212L4.66896 11.5377C4.37851 11.8277 4.14802 12.1721 3.99066 12.5511C3.83329 12.9302 3.75213 13.3365 3.7518 13.747C3.75148 14.1574 3.83199 14.5639 3.98875 14.9432C4.14552 15.3225 4.37546 15.6672 4.66544 15.9577C4.95543 16.2481 5.29978 16.4786 5.67884 16.636C6.0579 16.7933 6.46425 16.8745 6.87467 16.8748C7.2851 16.8751 7.69157 16.7946 8.07088 16.6379C8.4502 16.4811 8.79492 16.2512 9.08536 15.9612L15.4963 9.55493C15.6139 9.43822 15.7731 9.37299 15.9387 9.37358C16.1044 9.37416 16.2631 9.44052 16.3799 9.55805Z"
          fill="#1C1C1C"
        />
      </svg>
    );
  }

  function GptSvg() {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.8905 13.0965C30.1644 12.2844 30.3041 11.4341 30.3042 10.5783C30.3041 9.16204 29.9218 7.77139 29.1965 6.54926C27.7392 4.04632 25.0358 2.50104 22.1101 2.50104C21.5337 2.50104 20.9589 2.56111 20.3953 2.68023C19.6372 1.8375 18.7067 1.16289 17.6651 0.700901C16.6235 0.238909 15.4945 2.46305e-05 14.3525 0H14.3012L14.2819 0.000111657C10.7383 0.000111657 7.59573 2.25626 6.50639 5.58234C5.37878 5.81021 4.31351 6.27314 3.3819 6.94012C2.45029 7.6071 1.67384 8.46276 1.10451 9.4498C0.381469 10.6793 0.00044245 12.0754 0 13.4969C0.000276322 15.4946 0.751842 17.4212 2.10916 18.9035C1.83518 19.7156 1.69544 20.5659 1.69532 21.4217C1.69545 22.838 2.07778 24.2286 2.80301 25.4507C3.66544 26.9323 4.98248 28.1054 6.56422 28.8007C8.14595 29.4961 9.91064 29.6778 11.6038 29.3197C12.362 30.1624 13.2926 30.837 14.3342 31.299C15.3759 31.761 16.505 31.9999 17.6471 32H17.6984L17.7192 31.9999C21.2648 31.9999 24.4063 29.7436 25.4957 26.4145C26.6233 26.1866 27.6885 25.7236 28.6201 25.0566C29.5518 24.3896 30.3282 23.534 30.8976 22.547C31.6199 21.3186 32.0002 19.9236 32 18.5034C31.9997 16.5057 31.2482 14.5792 29.8908 13.0969L29.8905 13.0965ZM17.7004 29.908H17.692C16.2733 29.9075 14.8996 29.4164 13.8099 28.5201C13.8746 28.4857 13.9385 28.45 14.0017 28.4128L20.4592 24.7325C20.6203 24.642 20.7543 24.511 20.8475 24.3529C20.9408 24.1947 20.9899 24.015 20.99 23.8321V14.8433L23.7194 16.3983C23.7337 16.4054 23.746 16.4158 23.7553 16.4287C23.7646 16.4416 23.7705 16.4565 23.7725 16.4722V23.911C23.7687 27.2183 21.0526 29.9013 17.7004 29.908ZM4.64224 24.4051C4.10885 23.4951 3.82783 22.4625 3.82747 21.4112C3.82747 21.0684 3.85782 20.7246 3.91692 20.3868C3.96493 20.4152 4.04871 20.4657 4.10884 20.4997L10.5663 24.1801C10.7273 24.2728 10.9104 24.3216 11.0968 24.3216C11.2832 24.3216 11.4663 24.2726 11.6272 24.1798L19.5111 19.6882V22.7983L19.5112 22.8037C19.5112 22.8187 19.5077 22.8334 19.5009 22.8468C19.4942 22.8602 19.4843 22.8719 19.4722 22.8809L12.9443 26.5998C12.0206 27.1243 10.9736 27.4005 9.90791 27.4008C8.84106 27.4006 7.793 27.1238 6.8688 26.5979C5.94461 26.0721 5.17676 25.3157 4.64224 24.4047V24.4051ZM2.94341 10.4955C3.65264 9.27998 4.77252 8.3493 6.10704 7.8663C6.10704 7.92116 6.10387 8.01835 6.10387 8.08583V15.4466L6.10376 15.4526C6.10379 15.6354 6.15283 15.8149 6.24592 15.9729C6.33901 16.1309 6.47282 16.2618 6.63376 16.3523L14.5177 20.8433L11.7884 22.3983C11.7749 22.407 11.7594 22.4124 11.7434 22.4138C11.7273 22.4152 11.7111 22.4128 11.6963 22.4065L5.16772 18.6845C4.24481 18.157 3.47863 17.3994 2.94595 16.4877C2.41328 15.5759 2.13283 14.542 2.13271 13.4896C2.13312 12.4389 2.41277 11.4066 2.94375 10.4958L2.94341 10.4955ZM25.3683 15.6445L17.4844 11.1529L20.2138 9.59849C20.2273 9.58973 20.2427 9.58438 20.2588 9.58294C20.2748 9.5815 20.291 9.584 20.3058 9.59023L26.8343 13.3091C27.758 13.8358 28.525 14.593 29.0583 15.5047C29.5916 16.4163 29.8725 17.4504 29.8727 18.503C29.8727 21.0154 28.2838 23.2635 25.8948 24.1312V16.5504C25.8951 16.5476 25.8951 16.5447 25.8951 16.5419C25.8951 16.3598 25.8463 16.1809 25.7538 16.0234C25.6613 15.8658 25.5283 15.7351 25.3683 15.6445ZM28.0849 11.6102C28.0214 11.5718 27.9575 11.5342 27.8931 11.4974L21.4356 7.81692C21.2746 7.72435 21.0916 7.67555 20.9053 7.67549C20.7189 7.67555 20.5359 7.72435 20.3749 7.81692L12.4909 12.3086V9.19843L12.4908 9.19307C12.4908 9.16268 12.5054 9.13408 12.53 9.11587L19.0579 5.40012C19.9812 4.87488 21.0283 4.59837 22.0941 4.59832C25.4506 4.59832 28.1725 7.28403 28.1725 10.5958C28.1724 10.9357 28.143 11.2749 28.0849 11.6099V11.6102ZM11.007 17.1534L8.27701 15.5984C8.26268 15.5914 8.25034 15.581 8.24107 15.5681C8.23181 15.5552 8.22591 15.5403 8.2239 15.5246V8.0856C8.22538 4.77562 10.9473 2.09215 14.3023 2.09215C15.7232 2.09244 17.0992 2.58359 18.1915 3.48036C18.1423 3.50683 18.0566 3.55353 17.9997 3.58761L11.5422 7.26794C11.3811 7.35839 11.2471 7.48931 11.1539 7.64741C11.0607 7.80551 11.0116 7.98515 11.0115 8.16805V8.17397L11.007 17.1534ZM12.4897 13.9993L16.001 11.9982L19.5124 13.998V17.9988L16.001 19.9987L12.4897 17.9988V13.9993Z"
          fill="#1C1C1C"
        />
      </svg>
    );
  }

  function BellSVG() {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.0001 1.25C9.94464 1.25 7.97339 2.06652 6.51999 3.51992C5.06658 4.97333 4.25006 6.94457 4.25006 9V9.704C4.25001 10.4009 4.04367 11.0822 3.65706 11.662L2.51006 13.385C1.17606 15.385 2.19406 18.103 4.51306 18.735C5.26806 18.941 6.03006 19.115 6.79706 19.258L6.79906 19.263C7.56706 21.315 9.62206 22.75 12.0001 22.75C14.3781 22.75 16.4331 21.315 17.2021 19.263L17.2041 19.258C17.9723 19.1151 18.7342 18.9406 19.4881 18.735C21.8071 18.103 22.8251 15.385 21.4911 13.385L20.3431 11.662C19.9565 11.0822 19.7501 10.4009 19.7501 9.704V9C19.7501 6.94457 18.9335 4.97333 17.4801 3.51992C16.0267 2.06652 14.0555 1.25 12.0001 1.25ZM15.3761 19.537C13.133 19.805 10.8661 19.805 8.62306 19.537C9.33406 20.558 10.5711 21.25 12.0001 21.25C13.4291 21.25 14.6651 20.558 15.3761 19.537ZM5.75006 9C5.75006 7.3424 6.40854 5.75269 7.58065 4.58058C8.75275 3.40848 10.3425 2.75 12.0001 2.75C13.6577 2.75 15.2474 3.40848 16.4195 4.58058C17.5916 5.75269 18.2501 7.3424 18.2501 9V9.704C18.2501 10.697 18.5441 11.668 19.0951 12.494L20.2431 14.217C20.421 14.4834 20.5329 14.7883 20.5698 15.1065C20.6066 15.4247 20.5672 15.7471 20.4549 16.0471C20.3425 16.3471 20.1605 16.6161 19.9237 16.8319C19.6869 17.0476 19.4022 17.204 19.0931 17.288C14.4489 18.5546 9.55026 18.5546 4.90606 17.288C4.59723 17.2037 4.31284 17.0473 4.0763 16.8316C3.83977 16.6158 3.65786 16.347 3.54556 16.0472C3.43327 15.7475 3.39379 15.4253 3.43039 15.1073C3.46699 14.7892 3.57861 14.4844 3.75606 14.218L4.90606 12.494C5.4566 11.6677 5.75027 10.6969 5.75006 9.704V9Z"
          fill="black"
        />
      </svg>
    );
  }
  
  function SettingSvg() {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 8.25C11.0054 8.25 10.0516 8.64509 9.34835 9.34835C8.64509 10.0516 8.25 11.0054 8.25 12C8.25 12.9946 8.64509 13.9484 9.34835 14.6517C10.0516 15.3549 11.0054 15.75 12 15.75C12.9946 15.75 13.9484 15.3549 14.6517 14.6517C15.3549 13.9484 15.75 12.9946 15.75 12C15.75 11.0054 15.3549 10.0516 14.6517 9.34835C13.9484 8.64509 12.9946 8.25 12 8.25ZM9.75 12C9.75 11.4033 9.98705 10.831 10.409 10.409C10.831 9.98705 11.4033 9.75 12 9.75C12.5967 9.75 13.169 9.98705 13.591 10.409C14.0129 10.831 14.25 11.4033 14.25 12C14.25 12.5967 14.0129 13.169 13.591 13.591C13.169 14.0129 12.5967 14.25 12 14.25C11.4033 14.25 10.831 14.0129 10.409 13.591C9.98705 13.169 9.75 12.5967 9.75 12Z"
          fill="black"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.9748 1.25C11.5298 1.25 11.1588 1.25 10.8548 1.27C10.544 1.28294 10.2376 1.34714 9.94777 1.46C9.61402 1.59809 9.31075 1.80057 9.05526 2.05589C8.79978 2.3112 8.59709 2.61434 8.45877 2.948C8.31377 3.298 8.27477 3.668 8.25877 4.07C8.25717 4.21702 8.21826 4.36123 8.14567 4.48909C8.07308 4.61695 7.9692 4.72428 7.84377 4.801C7.71466 4.8715 7.56974 4.90803 7.42263 4.90716C7.27552 4.90628 7.13104 4.86803 7.00277 4.796C6.64677 4.608 6.30678 4.457 5.93078 4.407C5.57272 4.3599 5.20889 4.38379 4.86007 4.4773C4.51125 4.57081 4.18426 4.73212 3.89777 4.952C3.65555 5.14688 3.44709 5.38034 3.28077 5.643C3.11077 5.897 2.92477 6.218 2.70277 6.603L2.67777 6.647C2.45477 7.032 2.26977 7.353 2.13577 7.627C1.99577 7.913 1.88577 8.195 1.84577 8.507C1.75038 9.22999 1.94605 9.96127 2.38977 10.54C2.62077 10.841 2.92177 11.06 3.26177 11.274C3.38853 11.3489 3.49415 11.4549 3.56867 11.5819C3.64319 11.7089 3.68418 11.8528 3.68777 12C3.68418 12.1472 3.64319 12.2911 3.56867 12.4181C3.49415 12.5451 3.38853 12.6511 3.26177 12.726C2.92177 12.94 2.62177 13.159 2.38977 13.46C2.16989 13.7465 2.00859 14.0735 1.91508 14.4223C1.82157 14.7711 1.79768 15.1349 1.84477 15.493C1.88577 15.805 1.99477 16.087 2.13477 16.373C2.26977 16.647 2.45477 16.968 2.67777 17.353L2.70277 17.397C2.92477 17.782 3.11077 18.103 3.28077 18.357C3.45777 18.62 3.64777 18.857 3.89777 19.047C4.18418 19.2671 4.51114 19.4285 4.85996 19.5222C5.20879 19.6159 5.57265 19.64 5.93078 19.593C6.30678 19.543 6.64677 19.393 7.00277 19.204C7.13089 19.1321 7.27519 19.0939 7.42213 19.093C7.56906 19.0921 7.71381 19.1286 7.84277 19.199C7.96889 19.2751 8.07343 19.3823 8.14642 19.5102C8.21941 19.6382 8.25844 19.7827 8.25978 19.93C8.27478 20.332 8.31378 20.702 8.45977 21.052C8.59786 21.3857 8.80035 21.689 9.05566 21.9445C9.31098 22.2 9.61412 22.4027 9.94777 22.541C10.2378 22.661 10.5378 22.708 10.8548 22.729C11.1588 22.75 11.5298 22.75 11.9748 22.75H12.0248C12.4698 22.75 12.8408 22.75 13.1448 22.73C13.4628 22.708 13.7618 22.661 14.0518 22.54C14.3855 22.4019 14.6888 22.1994 14.9443 21.9441C15.1998 21.6888 15.4025 21.3857 15.5408 21.052C15.6858 20.702 15.7248 20.332 15.7408 19.93C15.7422 19.7828 15.781 19.6384 15.8536 19.5103C15.9262 19.3823 16.0302 19.2748 16.1558 19.198C16.285 19.1276 16.4299 19.0913 16.577 19.0923C16.7242 19.0934 16.8686 19.1318 16.9968 19.204C17.3528 19.392 17.6928 19.543 18.0688 19.592C18.7918 19.6874 19.523 19.4917 20.1018 19.048C20.3518 18.856 20.5418 18.62 20.7188 18.357C20.8888 18.103 21.0748 17.782 21.2968 17.397L21.3218 17.353C21.5448 16.968 21.7298 16.647 21.8638 16.373C22.0038 16.087 22.1138 15.804 22.1538 15.493C22.2492 14.77 22.0535 14.0387 21.6098 13.46C21.3788 13.159 21.0778 12.94 20.7378 12.726C20.611 12.6511 20.5054 12.5451 20.4309 12.4181C20.3564 12.2911 20.3154 12.1472 20.3118 12C20.3118 11.722 20.4638 11.446 20.7378 11.274C21.0778 11.06 21.3778 10.841 21.6098 10.54C21.8297 10.2535 21.991 9.92653 22.0845 9.5777C22.178 9.22888 22.2019 8.86506 22.1548 8.507C22.1072 8.19971 22.0092 7.90238 21.8648 7.627C21.694 7.29475 21.513 6.96792 21.3218 6.647L21.2968 6.603C21.1141 6.27709 20.9213 5.95693 20.7188 5.643C20.5525 5.38062 20.344 5.14749 20.1018 4.953C19.8154 4.73294 19.4884 4.57146 19.1396 4.47778C18.7908 4.38409 18.4269 4.36004 18.0688 4.407C17.6928 4.457 17.3528 4.607 16.9968 4.796C16.8686 4.86786 16.7243 4.90601 16.5774 4.90688C16.4305 4.90776 16.2858 4.87132 16.1568 4.801C16.031 4.72452 15.9267 4.6173 15.8538 4.48942C15.7808 4.36154 15.7416 4.21721 15.7398 4.07C15.7248 3.668 15.6858 3.298 15.5398 2.948C15.4017 2.61425 15.1992 2.31097 14.9439 2.05549C14.6886 1.8 14.3854 1.59731 14.0518 1.459C13.7618 1.339 13.4618 1.292 13.1448 1.271C12.8408 1.25 12.4698 1.25 12.0248 1.25H11.9748ZM10.5218 2.845C10.5988 2.813 10.7158 2.784 10.9568 2.767C11.2038 2.75 11.5238 2.75 11.9998 2.75C12.4758 2.75 12.7958 2.75 13.0428 2.767C13.2838 2.784 13.4008 2.813 13.4778 2.845C13.7848 2.972 14.0278 3.215 14.1548 3.522C14.1948 3.618 14.2278 3.769 14.2408 4.126C14.2708 4.918 14.6798 5.681 15.4058 6.1C16.1318 6.52 16.9968 6.492 17.6978 6.122C18.0138 5.955 18.1608 5.908 18.2648 5.895C18.5933 5.85158 18.9257 5.94043 19.1888 6.142C19.2548 6.193 19.3388 6.28 19.4738 6.48C19.6128 6.686 19.7728 6.963 20.0108 7.375C20.2488 7.787 20.4078 8.065 20.5168 8.287C20.6238 8.504 20.6568 8.62 20.6668 8.703C20.7102 9.03157 20.6213 9.36392 20.4198 9.627C20.3558 9.71 20.2418 9.814 19.9398 10.004C19.2678 10.426 18.8118 11.162 18.8118 12C18.8118 12.838 19.2678 13.574 19.9398 13.996C20.2418 14.186 20.3558 14.29 20.4198 14.373C20.6218 14.636 20.7098 14.968 20.6668 15.297C20.6568 15.38 20.6228 15.497 20.5168 15.713C20.4078 15.936 20.2488 16.213 20.0108 16.625C19.7728 17.037 19.6118 17.314 19.4738 17.52C19.3388 17.72 19.2548 17.807 19.1888 17.858C18.9257 18.0596 18.5933 18.1484 18.2648 18.105C18.1608 18.092 18.0148 18.045 17.6978 17.878C16.9978 17.508 16.1318 17.48 15.4058 17.899C14.6798 18.319 14.2708 19.082 14.2408 19.874C14.2278 20.231 14.1948 20.382 14.1548 20.478C14.092 20.6298 13.9998 20.7677 13.8837 20.8839C13.7675 21.0001 13.6296 21.0922 13.4778 21.155C13.4008 21.187 13.2838 21.216 13.0428 21.233C12.7958 21.25 12.4758 21.25 11.9998 21.25C11.5238 21.25 11.2038 21.25 10.9568 21.233C10.7158 21.216 10.5988 21.187 10.5218 21.155C10.37 21.0922 10.2321 21.0001 10.1159 20.8839C9.99972 20.7677 9.9076 20.6298 9.84478 20.478C9.80478 20.382 9.77177 20.231 9.75877 19.874C9.72877 19.082 9.31977 18.319 8.59377 17.9C7.86777 17.48 7.00278 17.508 6.30177 17.878C5.98577 18.045 5.83878 18.092 5.73478 18.105C5.40621 18.1484 5.07385 18.0596 4.81077 17.858C4.74477 17.807 4.66077 17.72 4.52577 17.52C4.33769 17.2272 4.1586 16.9287 3.98878 16.625C3.75077 16.213 3.59177 15.935 3.48277 15.713C3.37577 15.496 3.34277 15.38 3.33277 15.297C3.28936 14.9684 3.3782 14.6361 3.57977 14.373C3.64377 14.29 3.75777 14.186 4.05977 13.996C4.73177 13.574 5.18778 12.838 5.18778 12C5.18778 11.162 4.73177 10.426 4.05977 10.004C3.75777 9.814 3.64377 9.71 3.57977 9.627C3.3782 9.36392 3.28936 9.03157 3.33277 8.703C3.34277 8.62 3.37677 8.503 3.48277 8.287C3.59177 8.064 3.75077 7.787 3.98878 7.375C4.22677 6.963 4.38777 6.686 4.52577 6.48C4.66077 6.28 4.74477 6.193 4.81077 6.142C5.07385 5.94043 5.40621 5.85158 5.73478 5.895C5.83878 5.908 5.98478 5.955 6.30177 6.122C7.00177 6.492 7.86777 6.52 8.59377 6.1C9.31977 5.681 9.72877 4.918 9.75877 4.126C9.77177 3.769 9.80478 3.618 9.84478 3.522C9.97178 3.215 10.2148 2.972 10.5218 2.845Z"
          fill="black"
        />
      </svg>
    );
  }
  
  function ToggleSwitch() {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_364_209)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.574 3.1384C13.3933 3.10652 13.2073 3.12449 13.036 3.19036C12.8647 3.25624 12.7146 3.36754 12.6018 3.5123C12.489 3.65707 12.4178 3.82983 12.3958 4.01202C12.3739 4.19422 12.4019 4.37896 12.477 4.5464C12.9753 5.6563 13.1244 6.89144 12.9045 8.088C12.6846 9.28457 12.1062 10.386 11.2459 11.2463C10.3857 12.1066 9.28419 12.685 8.08763 12.9049C6.89106 13.1247 5.65592 12.9757 4.54603 12.4774C4.37854 12.402 4.19368 12.3738 4.01132 12.3956C3.82897 12.4175 3.65603 12.4887 3.51111 12.6015C3.36619 12.7143 3.25478 12.8645 3.18887 13.036C3.12296 13.2074 3.10503 13.3936 3.13703 13.5744C3.52843 15.792 4.73694 17.7823 6.524 19.1524C8.31107 20.5226 10.5468 21.173 12.79 20.9753C15.0332 20.7777 17.1208 19.7463 18.6407 18.0848C20.1606 16.4232 21.0024 14.2523 21 12.0004C21 9.88636 20.2559 7.83978 18.8981 6.21942C17.5403 4.59906 15.6555 3.50832 13.574 3.1384Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_364_209">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }