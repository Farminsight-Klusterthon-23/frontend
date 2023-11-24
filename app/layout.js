import { Sora } from 'next/font/google'
import './globals.css'

const sora = Sora({ subsets: ['latin'] })

export const metadata = {
  title: 'Farminsights',
  description: 'Klusterthon 2023',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sora.className}>{children}</body>
    </html>
  )
}
