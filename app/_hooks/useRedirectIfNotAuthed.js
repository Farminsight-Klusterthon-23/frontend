import { useEffect, useCallback, useState } from "react"
import useFetch from "../_request/useFetch"
import useRequestErrorHandler from "../_request/useRequestErrorHandler"

export default function useRedirectIfNotAuthed({
  redirectToDashboard,
  redirectToLogin,
  pathname
}) {
  const { error, errorHandler } = useRequestErrorHandler()
  const fetchUser = useFetch({ method: "GET" })

  const checkIfIsLoggedIn = useCallback(async () => {
    if (localStorage.getItem(process.env.NEXT_PUBLIC_LS_AUTH_KEY) === null)
      return redirectToLogin()
    const data = await errorHandler(fetchUser)("users/me")
    if (data && (data.statusCode === 200 || data.status === 200)) redirectToDashboard()
    else {
      localStorage.removeItem(process.env.NEXT_PUBLIC_LS_AUTH_KEY)
      redirectToLogin()
    }
  }, [fetchUser, errorHandler, redirectToDashboard, redirectToLogin])

  useEffect(() => {
    if (error !== null && pathname !== "/login") redirectToLogin()
  }, [error, redirectToLogin, pathname])

  useEffect(() => {
    checkIfIsLoggedIn()
  }, [checkIfIsLoggedIn])
}
