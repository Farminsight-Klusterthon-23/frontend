import { useCallback, useState } from "react"

export default function useRequestErrorHandler() {
  const [error, setError] = useState(null)
  const errorHandler = useCallback((asyncFn) => {
    return async (...asyncFnArgs) => {
      try {
        return await asyncFn(...asyncFnArgs)
      } catch (error) {
        console.log(error)
        setError({
          message: error.message,
          error: true,
          code: error.code,
        })
      }
    }
  }, [])
  return { error, errorHandler }
}
