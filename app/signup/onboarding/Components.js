import { useState, useCallback } from "react"
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete"
import { LocationSvg } from "../../_components/AuthSvgs"

export function LocationSearchInput({ updateLatLng, hasError }) {
  const [address, setAddress] = useState("")

  const handleChange = useCallback((address) => {
    setAddress(address)
  }, [])

  const handleSelect = useCallback(
    (address) => {
      setAddress(address)
      geocodeByAddress(address)
        .then((results) => getLatLng(results[0]))
        .then(updateLatLng)
        .catch(console.error)
    },
    [updateLatLng]
  )

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
      searchOptions={{
        types: ["(regions)"],
        componentRestrictions: { country: "ng" },
      }}
    >
      {({ ...props }) => <AutoCompleteInput {...props} hasError={hasError} />}
    </PlacesAutocomplete>
  )
}

function AutoCompleteInput({
  getInputProps,
  suggestions,
  getSuggestionItemProps,
  loading,
  hasError,
}) {
  return (
    <div className="relative w-full">
      <label>
        <span className="block absolute left-[8px] w-[24px] h-[24px] top-1/2 -translate-y-1/2">
          <LocationSvg />
        </span>
        <input
          {...getInputProps({
            placeholder: "Where are you located",
            className: `${
              hasError ? "border-red-400" : " border-white"
            } border bg-transparent text-white pl-[40px] py-[15px] pr-[8px] w-full rounded-[4px]`,
          })}
        />
      </label>
      <SuggestionsList
        suggestions={suggestions}
        loading={loading}
        getSuggestionItemProps={getSuggestionItemProps}
      />
    </div>
  )
}

function SuggestionsList({ loading, suggestions, getSuggestionItemProps }) {
  return (
    <ul className="text-center max-h-[300px] overflow-y-auto absolute w-full bg-white rounded-b-[8px] border-primary-main border">
      {loading && <li className="text-center">Loading suggestions...</li>}
      {suggestions.map((suggestion) => {
        return (
          <li key={suggestion.description}>
            <button
              {...getSuggestionItemProps(suggestion, {
                className:
                  "hover:bg-primary-main/60 w-full py-[16px] px-[12px] text-left",
              })}
              key={undefined}
            >
              {suggestion.description}
            </button>
          </li>
        )
      })}
    </ul>
  )
}
