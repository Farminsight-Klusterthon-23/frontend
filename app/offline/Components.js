import { FileSvg } from "./Svgs"
import NextLink from "next/link"
export function OfflineDisplay({ show }) {
  if (!show) return null
  return <NoOfflineItemsDisplay />
}

export function NoOfflineItemsDisplay() {
  return (
    <section className="text-center mx-auto">
      <span className="block mb-[16px] mx-auto w-fit">
        <FileSvg />
      </span>
      <h1 className="font-[600] text-[1.125rem]">
        You dont have any offline content saved yet!
      </h1>
      <p className="font-montserrat font-[400] text-[1.125rem] mb-[8px]">
        Searches you save for later can be found here even without a network.
      </p>
      <NextLink
        href="/dashboard"
        className="block w-fit bg-primary-main mx-auto text-white text-base py-[16px] px-[12px] rounded-[4px]"
      >
        Start asking questions
      </NextLink>
    </section>
  )
}
