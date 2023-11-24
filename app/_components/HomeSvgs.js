export function GradientBar({ rotate }) {
  return (
    <svg
      className={`${rotate ? "rotate-[180deg]" : ""}`}
      width="300"
      height="24"
      viewBox="0 0 300 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="300" height="24" fill="url(#paint0_linear_86_2100)" />
      <defs>
        <linearGradient
          id="paint0_linear_86_2100"
          x1="-23.3173"
          y1="12.2264"
          x2="448.936"
          y2="12.2264"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#008148" />
          <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}
