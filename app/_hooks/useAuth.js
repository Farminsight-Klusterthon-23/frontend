import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"

export default function useAuth() {
  const router = useRouter()
  const [token, setToken] = useState(null)
  const pathname = usePathname()
  useEffect(() => {
    const tokenInLs = localStorage.getItem(process.env.NEXT_PUBLIC_LS_AUTH_KEY)
    if (tokenInLs) {
      setToken(tokenInLs)
      if (
        pathname.toLowerCase().includes("/login") ||
        pathname.toLowerCase().includes("/signup")
      ) {
        router.push("/dashboard")
      }
    }
  }, [pathname, router])
  return token
}
