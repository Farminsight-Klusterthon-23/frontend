import { useCallback } from "react"

export default function useFetch(configOptions = "GET") {
  return useCallback(
    async (path, data) => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_FARMINSIGHTS_API_DEV}/${path}`,
        {
          method: "POST",
          mode: "cors",
          credentials: "include",
          ...configOptions,
          headers: {
            "Content-Type": "application/json",
            ...(configOptions.headers || {}),
            authorization: `Bearer ${localStorage.getItem(
              process.env.NEXT_PUBLIC_LS_AUTH_KEY
            )}`,
          },
          body: JSON.stringify(data),
        }
      )
      return response.json()
    },
    [configOptions]
  )
}
