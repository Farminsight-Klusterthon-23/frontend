import { FileSvg } from "./Svgs"

export function OfflineDisplay({ hasOfflineItems }) {
  if (!hasOfflineItems) return <NoOfflineItemsDisplay />
  return <section></section>
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
      <button className="bg-primary-main mx-auto text-white text-base py-[16px] px-[12px] rounded-[4px]">
        Start asking questions
      </button>
    </section>
  )
}