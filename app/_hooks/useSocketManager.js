import useSocket from "../_socket/useSocket"
import { useEffect } from "react"

export default function useSocketManager({
  namespace,
  events = [],
  eventHandlers = {},
}) {
  const [socket, disconnect] = useSocket({ namespace })

  useEffect(() => {
    events.map(ev => socket.on(ev, eventHandlers[ev]))

    return () => {
      events.map(ev => socket.off(ev, eventHandlers[ev]))
    }
  }, [events, eventHandlers, socket])

  return socket
}
