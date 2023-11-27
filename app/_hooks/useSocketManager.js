import useSocket from "../_socket/useSocket"
import { useEffect } from "react"

export default function useSocketManager({
  namespace,
  events = [],
  eventHandlers = {},
}) {
  const [socket, disconnect] = useSocket({ namespace })

  useEffect(() => {
    events.forEach((event) => {
      socket.on(
        event,
        (data) => eventHandlers[event] && eventHandlers[event](data)
      )
    })

    return () => {
      events.forEach((event) => {
        socket.off(event, eventHandlers[event])
      })
    }
  }, [events, eventHandlers, socket])

  return socket
}
