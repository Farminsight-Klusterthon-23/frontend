"use client"
import "./globals.css"
import { Sora } from "next/font/google"
import { Provider } from "react-redux"
import store from "./_redux/store"
const sora = Sora({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <>
          <body className={sora.className}>{children}</body>
        </>
      </Provider>
      <script
        async
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}&libraries=places`}
      ></script>
    </html>
  )
}
