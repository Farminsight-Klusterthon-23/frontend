"use client"
import "./globals.css"
import { Sora } from "next/font/google"
import { Provider } from "react-redux"
import store from "./_redux/store"
import UserProvider from "./_providers/User"
const sora = Sora({ subsets: ["latin"] })

// export const metadata = {
//   title: "Farminsights",
//   description: "Klusterthon 2023",
// }

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Provider store={store}>
        <UserProvider><body className={sora.className}>{children}</body></UserProvider>
      </Provider>
    </html>
  )
}
