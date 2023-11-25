import NextLink from "next/link"

export function ModeTogglerHeader({ currentMode }) {
  return (
    <div className="sticky top-0 z-10 py-3 bg-primary-contrast-text w-full">
      <ModeTags currentMode={currentMode} />
    </div>
  )
}
export function ModeTagBtn({ currentMode, mode, Icon, href }) {
  return (
    <NextLink
      href={`${href}`}
      className={`${
        currentMode === mode ? "cursor-default" : "opacity-20 hover:opacity-80"
      } text-primary-medium min-w-[150px] bg-white p-3 gap-x-[15px] flex justify-center items-center rounded-[20px] transition-all duration-[300ms]`}
    >
      <Icon />
      {mode}
    </NextLink>
  )
}

export function ModeTags({ currentMode }) {
  const buttons = [
    { icon: ChatSvg, name: "chat", href: "/dashboard" },
    { icon: OfflineSvg, name: "offline", href: "/offline" },
  ]
  return (
    <div className="flex items-center justify-center text-[1.125rem] font-700 font-pjs">
      {buttons.map((button) => (
        <ModeTagBtn
          key={button.name}
          currentMode={currentMode}
          href={button.href}
          Icon={button.icon}
          mode={button.name}
        />
      ))}
    </div>
  )
}

export function ChatSvg() {
  return (
    <svg
      width="39"
      height="39"
      viewBox="29 0 40 40"
      fill=""
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="29"
        y="0.5"
        width="39"
        height="39"
        rx="19.5"
        fill="url(#paint0_linear_53_423)"
      />
      <g filter="url(#filter0_d_53_423)">
        <path
          d="M53.6937 16.6205C53.6322 16.6205 53.58 16.6078 53.5369 16.5823C53.4938 16.5569 53.46 16.5123 53.4354 16.4487L52.9004 15.1504L51.5535 14.5394C51.492 14.5139 51.449 14.4789 51.4244 14.4344C51.3998 14.3898 51.3875 14.3357 51.3875 14.2721C51.3875 14.2084 51.3998 14.1543 51.4244 14.1098C51.449 14.0652 51.492 14.0302 51.5535 14.0048L52.9004 13.4129L53.4354 12.1718C53.46 12.1082 53.4938 12.0636 53.5369 12.0382C53.58 12.0127 53.6322 12 53.6937 12C53.7552 12 53.8075 12.0127 53.8506 12.0382C53.8936 12.0636 53.9274 12.1082 53.952 12.1718L54.4871 13.4129L55.8339 14.0048C55.8954 14.0302 55.9385 14.0652 55.9631 14.1098C55.9877 14.1543 56 14.2084 56 14.2721C56 14.3357 55.9877 14.3898 55.9631 14.4344C55.9385 14.4789 55.8954 14.5139 55.8339 14.5394L54.4871 15.1504L53.952 16.4487C53.9274 16.5123 53.8936 16.5569 53.8506 16.5823C53.8075 16.6078 53.7552 16.6205 53.6937 16.6205ZM53.6937 28C53.6445 28 53.5953 27.9873 53.5461 27.9618C53.4969 27.9364 53.46 27.8918 53.4354 27.8282L52.9004 26.5871L51.572 25.9952C51.5105 25.9698 51.4674 25.9348 51.4428 25.8902C51.4182 25.8457 51.4059 25.7916 51.4059 25.7279C51.4059 25.6643 51.4182 25.6102 51.4428 25.5656C51.4674 25.5211 51.5105 25.4861 51.572 25.4606L52.9004 24.8687L53.4354 23.5513C53.46 23.4877 53.4938 23.4431 53.5369 23.4177C53.58 23.3922 53.6322 23.3795 53.6937 23.3795C53.7552 23.3795 53.8075 23.3922 53.8506 23.4177C53.8936 23.4431 53.9274 23.4877 53.952 23.5513L54.4871 24.8687L55.8155 25.4606C55.877 25.4861 55.92 25.5211 55.9446 25.5656C55.9692 25.6102 55.9815 25.6643 55.9815 25.7279C55.9815 25.7916 55.9692 25.8457 55.9446 25.8902C55.92 25.9348 55.877 25.9698 55.8155 25.9952L54.4871 26.5871L53.952 27.8282C53.9274 27.8918 53.8905 27.9364 53.8413 27.9618C53.7921 27.9873 53.7429 28 53.6937 28ZM45.5941 24.6969C45.4957 24.6969 45.4004 24.6683 45.3081 24.611C45.2159 24.5537 45.1451 24.4741 45.0959 24.3723L43.8967 21.7184L41.3137 20.5155C41.2153 20.4646 41.1384 20.3914 41.083 20.2959C41.0277 20.2005 41 20.1018 41 20C41 19.8982 41.0277 19.7995 41.083 19.7041C41.1384 19.6086 41.2153 19.5354 41.3137 19.4845L43.8967 18.2816L45.0959 15.6468C45.1451 15.5322 45.2159 15.4463 45.3081 15.389C45.4004 15.3317 45.4957 15.3031 45.5941 15.3031C45.6925 15.3031 45.7878 15.3317 45.8801 15.389C45.9723 15.4463 46.0431 15.5259 46.0923 15.6277L47.31 18.2816L49.8745 19.4845C49.9852 19.5354 50.0683 19.6086 50.1236 19.7041C50.179 19.7995 50.2066 19.8982 50.2066 20C50.2066 20.1018 50.179 20.2005 50.1236 20.2959C50.0683 20.3914 49.9852 20.4646 49.8745 20.5155L47.31 21.7184L46.0923 24.3723C46.0431 24.4869 45.9723 24.5696 45.8801 24.6205C45.7878 24.6714 45.6925 24.6969 45.5941 24.6969Z"
          fill="#034732"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_53_423"
          x="0.0499992"
          y="3.55"
          width="96.9"
          height="97.9"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_53_423"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_53_423"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_53_423"
          x1="48.5"
          y1="0.5"
          x2="48.5"
          y2="39.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFF1F1" />
          <stop offset="1" stopColor="#FD9797" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function OfflineSvg() {
  return (
    <svg
      width="39"
      height="39"
      viewBox="27 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="27"
        y="0.5"
        width="39"
        height="39"
        rx="19.5"
        fill="url(#paint0_linear_53_428)"
      />
      <g filter="url(#filter0_d_53_428)">
        <path
          d="M44.5087 22.0878H41.5617C41.3401 22.0878 41.1761 21.9908 41.0697 21.7967C40.9634 21.6026 40.9787 21.4129 41.1157 21.2276L47.4289 12.2832C47.5224 12.16 47.6394 12.0755 47.7797 12.0297C47.92 11.984 48.0604 11.991 48.2007 12.051C48.341 12.1055 48.4521 12.1971 48.534 12.3258C48.6158 12.4544 48.6451 12.5918 48.6217 12.7379L47.8582 18.6861H51.43C51.6717 18.6861 51.8421 18.7902 51.9412 18.9985C52.0403 19.2067 52.0141 19.4035 51.8627 19.5889L44.908 27.758C44.8144 27.8725 44.6938 27.9469 44.5463 27.9812C44.3987 28.0156 44.262 28.0028 44.1361 27.9428C44.0047 27.8883 43.9031 27.7994 43.8312 27.6762C43.7594 27.553 43.7324 27.4156 43.7502 27.2641L44.5087 22.0878Z"
          fill="#603CFF"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_53_428"
          x="0.0499992"
          y="3.55"
          width="92.9"
          height="97.9"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_53_428"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_53_428"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_53_428"
          x1="46.5"
          y1="0.5"
          x2="46.5"
          y2="39.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FBFBFF" />
          <stop offset="1" stopColor="#CACAFF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
