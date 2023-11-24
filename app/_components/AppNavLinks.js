"use client"
import NextLink from "next/link"
import { useMemo } from "react"
import { usePathname } from "next/navigation"

function DashboardIcon({ fill }) {
  return (
    <svg
      width="18"
      height="21"
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.64996 17.8489C9.26321 18.1543 8.71531 18.1543 8.32856 17.8489L1.72158 12.6338C1.33483 12.3283 0.797672 12.3283 0.410922 12.6338C-0.136974 13.0702 -0.136974 13.9103 0.410922 14.3467L7.67323 20.0854C8.44673 20.6964 9.53178 20.6964 10.316 20.0854L17.5783 14.3467C18.1262 13.9103 18.1262 13.0702 17.5783 12.6338L17.5676 12.6229C17.1808 12.3174 16.6437 12.3174 16.2569 12.6229L9.64996 17.8489ZM10.3268 14.554L17.5891 8.81528C18.137 8.37887 18.137 7.52788 17.5891 7.09148L10.3268 1.35276C9.55327 0.74179 8.46822 0.74179 7.68398 1.35276L0.421665 7.10239C-0.126231 7.53879 -0.126231 8.38978 0.421665 8.82619L7.68398 14.5649C8.45748 15.1759 9.55327 15.1759 10.3268 14.554Z"
        fill={fill}
      />
    </svg>
  )
}

function ProduceIcon({ fill }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 7L12 2L2 7V17L12 22L22 17V7Z"
        stroke="#718096"
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M2 7L12 12M12 12V22M12 12L22 7M17 4.5L7 9.5"
        stroke="#718096"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

function OfflineIcon({ fill }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 5.27L5 9.27V15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H11V19H10C9.73478 19 9.48043 19.1054 9.29289 19.2929C9.10536 19.4804 9 19.7348 9 20H2V22H9C9 22.2652 9.10536 22.5196 9.29289 22.7071C9.48043 22.8946 9.73478 23 10 23H14C14.2652 23 14.5196 22.8946 14.7071 22.7071C14.8946 22.5196 15 22.2652 15 22H17.73L19.73 24L21 22.72L2.28 4L1 5.27ZM15 20C15 19.7348 14.8946 19.4804 14.7071 19.2929C14.5196 19.1054 14.2652 19 14 19H13V17.27L15.73 20H15ZM17.69 16.87L5.13 4.31C5.41 3.55 6.14 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V15C19 15.86 18.45 16.59 17.69 16.87ZM22 20V21.18L20.82 20H22Z"
        fill="#718096"
      />
    </svg>
  )
}

function NotificationsIcon({ fill }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_120_2426)">
        <path
          d="M14.235 19C15.1 19 15.557 20.024 14.98 20.668C14.6052 21.0875 14.1459 21.4229 13.6324 21.6525C13.1188 21.8821 12.5625 22.0005 12 22C11.4375 22.0005 10.8812 21.8821 10.3676 21.6525C9.85409 21.4229 9.39484 21.0875 9.02001 20.668C8.46801 20.052 8.86201 19.089 9.65401 19.007L9.76401 19.001L14.235 19ZM12 2C13.358 2 14.506 2.903 14.875 4.141L14.921 4.312L14.929 4.355C16.0314 4.9769 16.9708 5.8511 17.6702 6.906C18.3697 7.9609 18.8093 9.16648 18.953 10.424L18.981 10.711L19 11V13.931L19.021 14.067C19.1579 14.8038 19.5657 15.4627 20.164 15.914L20.331 16.031L20.493 16.13C21.353 16.617 21.053 17.896 20.116 17.994L20 18H4.00001C2.97201 18 2.61301 16.636 3.50701 16.13C3.88804 15.9144 4.21725 15.618 4.47155 15.2616C4.72584 14.9052 4.89905 14.4974 4.97901 14.067L5.00001 13.924L5.00101 10.954C5.06198 9.64788 5.44217 8.37661 6.10829 7.25147C6.77442 6.12632 7.70617 5.18161 8.82201 4.5L9.07001 4.354L9.08001 4.311C9.22146 3.71303 9.54295 3.17284 10.0011 2.76334C10.4592 2.35384 11.032 2.09473 11.642 2.021L11.824 2.004L12 2Z"
          fill="#718096"
        />
      </g>
      <defs>
        <clipPath id="clip0_120_2426">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

function NavLink({ children, href, Icon }) {
  const pathname = usePathname()
  const isActive = useMemo(() => pathname === href, [pathname, href])

  return (
    <NextLink
      className={`flex items-center justify-start gap-x-[15px] capitalize text-base leading-[188%] font-normal ${
        isActive ? "text-primary-main" : "text-secondary-dark opacity-50"
      }`}
      href={href}
    >
      <Icon fill={isActive ? "#034732" : "#718096"} /> {children}
    </NextLink>
  )
}
export default function Links() {
  return (
    <ul className="flex flex-col items-start gap-y-[16px]">
      <li>
        <NavLink Icon={DashboardIcon} href="/dashboard">
          dashboard
        </NavLink>
      </li>
      <li>
        <NavLink Icon={ProduceIcon} href="/produce-listings">
          Produce Listings
        </NavLink>
      </li>
      <li>
        <NavLink href="/" Icon={OfflineIcon}>
          Offline mode
        </NavLink>
      </li>
      <li>
        <NavLink href="/" Icon={NotificationsIcon}>
          Notifications
        </NavLink>
      </li>
    </ul>
  )
}
