import { LightThemeLogo } from "./Logos"
import Links from "./AppNavLinks"
import UserAvatarAndName from "./UserAvatarAndName"
import ChatHistory from "./ChatHistoryList"
import { LogoutButton } from "./Buttons"
import { useRef } from "react"
import useOutsideClick from "../_hooks/useOutsideClick"

export default function SideBar({ show, hideSidebar = () => {} }) {
  const sidebarRef = useRef(null)
  useOutsideClick(sidebarRef, hideSidebar)
  
  return (
    <div ref={sidebarRef}
      className={`bg-primary-contrast-text overflow-auto z-[100] w-[95vw] max-w-[280px] min-h-[100dvh] fixed left-0 inset-y-0 sm:sticky pb-[2%] pt-[15%] pl-[8px] transition-transform duration-[300ms] ease-in-out ${
        show ? "translate-x-0" : "translate-x-[-100vw] sm:translate-x-0"
      }`}
    >
      <>
        <div className="flex justify-center items-center">
          <LightThemeLogo />
        </div>
        <nav className="shadow-dashboard-sidenav bg-white rounded-[20px] mt-[14px]">
          <div className="pl-[10px] py-[30px]">
            <Links />
          </div>
          <hr className="border-[#e3e3e3]" />
          <section className="pt-[10%] px-[10px] flex flex-col items-start gap-y-[17px]">
            <h3 className="flex items-center justify-start gap-x-[17px] text-base font-normal">
              History
              <button className="flex justify-center items-center">
                <RefreshSVG />
              </button>
            </h3>
            <ChatHistory />
          </section>
          <div className="flex justify-between items-center px-[25px] py-[14px] rounded-[31px] my-[12px]">
            <UserAvatarAndName />
            <LogoutButton>
              <LogoutIcon />
            </LogoutButton>
          </div>
        </nav>
      </>
    </div>
  )
}

function LogoutIcon() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="33" height="33" rx="16.5" stroke="#E0E5F2" />
      <path
        d="M19.9182 19.9141C19.7798 19.7764 19.7106 19.6124 19.7106 19.422C19.7106 19.2316 19.7798 19.0696 19.9182 18.9361L21.1642 17.697H15.8629C15.6673 17.697 15.5025 17.6301 15.3685 17.4962C15.2344 17.3623 15.1674 17.1976 15.1674 17.0023C15.1674 16.8069 15.2344 16.6433 15.3685 16.5114C15.5025 16.3795 15.6673 16.3136 15.8629 16.3136H21.129L19.8556 15.0472C19.7289 14.9268 19.6672 14.773 19.6705 14.5858C19.6738 14.3985 19.7459 14.2358 19.8869 14.0975C20.0188 13.9592 20.1838 13.8917 20.3817 13.895C20.5797 13.8982 20.7479 13.9687 20.8863 14.1064L23.3308 16.5376C23.402 16.6101 23.4544 16.6878 23.488 16.7708C23.5217 16.8537 23.5385 16.9389 23.5385 17.0262C23.5385 17.1135 23.5217 17.1976 23.488 17.2785C23.4544 17.3595 23.402 17.4359 23.3308 17.508L20.8939 19.9315C20.7672 20.0576 20.6092 20.1206 20.4198 20.1206C20.2305 20.1206 20.0633 20.0518 19.9182 19.9141ZM11.8625 23.5388C11.4792 23.5388 11.1499 23.4029 10.8746 23.131C10.5992 22.8591 10.4615 22.5339 10.4615 22.1554V11.8552C10.4615 11.474 10.5992 11.1465 10.8746 10.8727C11.1499 10.5988 11.4792 10.4619 11.8625 10.4619H16.3461C16.5417 10.4619 16.7065 10.5308 16.8405 10.6686C16.9746 10.8063 17.0416 10.9726 17.0416 11.1674C17.0416 11.3622 16.9746 11.5255 16.8405 11.6574C16.7065 11.7893 16.5417 11.8552 16.3461 11.8552H11.8625V22.1554H16.3461C16.5417 22.1554 16.7065 22.2224 16.8405 22.3563C16.9746 22.4902 17.0416 22.6548 17.0416 22.8502C17.0416 23.0456 16.9746 23.2092 16.8405 23.341C16.7065 23.4729 16.5417 23.5388 16.3461 23.5388H11.8625Z"
        fill="#1B2559"
      />
    </svg>
  )
}

function RefreshSVG() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_86_2451)">
        <path
          d="M13.9719 2.69375C12.5094 1.04375 10.3813 0 8 0C3.58125 0 0 3.58125 0 8H2C2 4.68437 4.68437 2 8 2C9.82812 2 11.45 2.82812 12.5469 4.11875L10.6656 6H16V0.665625L13.9719 2.69375ZM8 14C6.17188 14 4.55 13.1719 3.45312 11.8813L5.33437 10H0V15.3344L2.02813 13.3062C3.49062 14.9562 5.62187 16 8 16C12.4187 16 16 12.4187 16 8H14C14 11.3156 11.3156 14 8 14Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_86_2451">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
