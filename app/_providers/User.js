"use client"
import { useRouter, usePathname } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import useRedirectIfNotAuthed from "../_hooks/useRedirectIfNotAuthed"
import { setUser } from "../_redux/user"
import { useEffect } from "react"

const externalPages = ["/", "/login", "/signup"]

export default function UserProvider({ children }) {
  const { data } = useSelector((store) => store.user)
  const router = useRouter()
  const pathname = usePathname()
  const dispatch = useDispatch()
  const user = useRedirectIfNotAuthed({
    redirectToLogin: () =>
      !externalPages.includes(pathname) && router.push("/login"),
    redirectToDashboard: () =>
      externalPages.includes(pathname) && router.push("/dashboard"),
  })
  useEffect(() => {
    data === null && user !== null && dispatch(setUser(user))
  }, [user, data, dispatch])
  return <>{children}</>
}
