import { useCallback } from "react"
import useFetch from "../_request/useFetch"
import useRequestErrorHandler from "../_request/useRequestErrorHandler"
import { useDispatch } from "react-redux"
import { logout } from "../_redux/user"
import { useRouter } from "next/navigation"

export const LogoutButton = ({ children }) => {
  const dispatch = useDispatch()
  const logoutUser = useFetch({ method: "GET" })
  const router = useRouter()
  const { errorHandler } = useRequestErrorHandler()

  const handleLogout = useCallback(async () => {
    const logoutSuccess = await errorHandler(logoutUser)("users/logout")
    if (logoutSuccess.status === 200) {
      dispatch(logout())
      router.push("/")
    }
  }, [dispatch, errorHandler, logoutUser, router])

  return <button onClick={handleLogout}>{children}</button>
}
