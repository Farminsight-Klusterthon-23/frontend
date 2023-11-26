import useSocket from "../_socket/useSocket"
import { useEffect } from "react"

export default function useSocketManager({
  namespace,
  events = [],
  eventHandlers = {},
}) {
  const [socket, disconnect] = useSocket({ namespace })

  useEffect(() => {
    socket.onAny((ev, ...rest) => {
      if(typeof eventHandlers[ev] === "function"){
        eventHandlers[ev](...rest)
      }
    })

    return () => {
      socket.offAny((ev, ...rest) => {
        if(typeof eventHandlers[ev] === "function"){
          eventHandlers[ev](...rest)
        }
      })
    }
  }, [events, eventHandlers, socket])

  return socket
}
