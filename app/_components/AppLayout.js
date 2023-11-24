import AuthenticatedScreensHeader from "./AppHeader"
import Sidebar from "./AppSidebar"

export default function AuthenticatedScreensLayout({ children, pageTitle }) {
  return (
    <div className="flex bg-primary-contrast-text">
      <div className>
        <Sidebar />
      </div>
      <div className="grow">
        <AuthenticatedScreensHeader heading={pageTitle} />
        <div className="mx-auto flex justify-center items-center min-h-[calc(100dvh-94px)]">
          <main className="w-full grow">{children}</main>
        </div>
      </div>
    </div>
  )
}
