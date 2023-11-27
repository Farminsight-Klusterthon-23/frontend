"use client"
import { useEffect, useMemo, useCallback, useState } from "react"
import { io } from "socket.io-client"

export default function useSocket({
  onConnect = () => {},
  onError = () => {},
  onReconnectError = () => {},
  onReconnect = () => {},
  onDisconnect = () => {},
  namespace = "",
}) {
  const [token, setToken] = useState(null)
  const socket = useMemo(
    () =>
      io(`${process.env.NEXT_PUBLIC_FARMINSIGHTS_API_SOCKET}${namespace}`, {
        auth: {
          token,
        },
        reconnection: true,
      }),
    [namespace, token]
  )

  const disconnect = useCallback(() => {
    socket.disconnect()
  }, [socket])

  // const tryReconnect = useCallback(() => {
  //   setTimeout(() => {
  //     socket.io.open((err) => {
  //       if (err) {
  //         tryReconnect()
  //       }
  //     })
  //   }, 2000)
  // }, [socket])

  useEffect(() => {
    socket.on("connect", onConnect)
    socket.on("disconnect", onDisconnect)
    socket.on("error", onError)
    socket.on("reconnect", onReconnect)
    socket.on("reconnect_error", onReconnectError)
    // socket.io.on("close", tryReconnect)

    return () => {
      socket.off("connect", onConnect)
      socket.off("disconnect", onDisconnect)
      socket.off("error", onError)
      socket.off("reconnect", onReconnect)
      socket.off("reconnect_error", onReconnectError)
      // socket.io.off("close", tryReconnect)
    }
  }, [onConnect, onDisconnect, onError, onReconnect, onReconnectError, socket])

  useEffect(() => {
    setToken(localStorage.getItem(process.env.NEXT_PUBLIC_LS_AUTH_KEY))
  }, [])

  return [socket, disconnect]
}
