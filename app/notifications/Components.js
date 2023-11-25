import { CheckMarkSvg } from "./Svgs"
import NextLink from "next/link"

export function NotificationsDisplay({ notifications = [] }) {
  if (notifications.length === 0) return <NoNotificationsDisplay />
  return <section></section>
}

export function NoNotificationsDisplay() {
  return (
    <section className="text-center mx-auto my-[80px]">
      <span className="block mb-[16px] mx-auto w-fit">
        <CheckMarkSvg />
      </span>
      <h1 className="font-[600] ny-4 text-[1.6rem]">All Caught Up!</h1>
      <p className="font-montserrat font-[400] text-[1.125rem] mb-[8px]">
        You don&apos;t have any new notifications yet.
      </p>
      <NextLink
        href="/dashboard"
        className="block bg-primary-main mx-auto text-white text-base py-[16px] px-[12px] rounded-[4px]"
      >
        Back to dashboard
      </NextLink>
    </section>
  )
}
