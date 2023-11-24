import { useCallback } from "react"
import { useEffect } from "react"

export default function useOutsideClick(ref, handler) {
  const handleOnOutsideClick = useCallback(
    (event) => {
      typeof handler === "function" && handler(event)
    },
    [handler]
  )

  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handleOnOutsideClick()
    }
    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)
    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, handleOnOutsideClick])
}