import useSocket from "../_socket/useSocket"
import { useEffect } from "react"

export default function useSocketManager({
  namespace,
  events = [],
  eventHandlers = {},
}) {
  const [socket, disconnect] = useSocket({ namespace })

  useEffect(() => {})

  return socket
}
