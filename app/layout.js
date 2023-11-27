import "./globals.css"
import { Sora } from "next/font/google"
const sora = Sora({ subsets: ["latin"] })
import Provider from "./_components/ReduxProvider"

export const metadata = {
  manifest: "/manifest.json",
  title: "FarmInsights",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
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
