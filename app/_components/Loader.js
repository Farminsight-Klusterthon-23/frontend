export default function Loader({ loading }) {
  if (!loading) return null
  return (
    <section className="z-[1000] bg-white/70 fixed inset-0 place-items-center grid h-screen w-screen gap-4">
      {/* <!--   ITEM 1 --> */}
      <div className="bg-primary-main/80 w-48 h-48  absolute animate-ping rounded-full delay-5s shadow-xl"></div>
      {/* <!--   ITEM 2 --> */}
      <div className="bg-primary-main/50 w-32 h-32 absolute animate-ping rounded-full shadow-xl"></div>
      {/* <!--   ITEM 3 --> */}
      <div className="bg-white w-24 h-24 absolute animate-pulse rounded-full shadow-xl"></div>
      {/* <!--   SVG LOGO --> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary-main filter mix-blend-overlay h-16 w-16"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
        />
      </svg>
      {/* Attribution to https://codepen.io/bramslo/pen/KKZWeYq */}
    </section>
  )
}