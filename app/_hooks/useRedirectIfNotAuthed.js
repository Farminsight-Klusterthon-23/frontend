import { useEffect, useCallback, useState } from "react"
import useFetch from "../_request/useFetch"
import useRequestErrorHandler from "../_request/useRequestErrorHandler"

export default function useRedirectIfNotAuthed({
  redirectToDashboard,
  redirectToLogin,
}) {
  const { error, errorHandler } = useRequestErrorHandler()
  const fetchUser = useFetch({ method: "GET" })

  const checkIfIsLoggedIn = useCallback(async () => {
    const data = await errorHandler(fetchUser)("users/me")
    if (data.statusCode === 200 || data.status === 200) redirectToDashboard()
    else redirectToLogin()
  }, [fetchUser, errorHandler, redirectToDashboard, redirectToLogin])

  useEffect(() => {
    if (error !== null) redirectToLogin()
  }, [error, redirectToLogin])

  useEffect(() => {
    checkIfIsLoggedIn()
  }, [checkIfIsLoggedIn])
}
