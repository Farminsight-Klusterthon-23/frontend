import { useDispatch } from "react-redux"

export default function useGenerateEventHandlers(events = [], sliceActions) {
  const dispatch = useDispatch()
  const eventHandlers = {}
  events.map((event) => {
    eventHandlers[event] = (...data) => {
      dispatch(sliceActions[event](...data))
    }
  })
  return eventHandlers
}
