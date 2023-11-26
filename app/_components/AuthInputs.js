export function AuthInput({ Icon, label, inputProps = {} }) {
  const { hasError, ...rest} = inputProps
  return (
    <label className="relative">
      <span className="block absolute left-[8px] w-[24px] h-[24px] top-1/2 -translate-y-1/2">
        <Icon />
      </span>
      <input
        {...rest}
        className={`${
          hasError ? "border-red-400" : "border-[#EDF1FA]"
        } bg-[#EDF1FA] pl-[40px] border py-[17px] pr-[8px] w-full rounded-[4px]`}
      />
    </label>
  )
}

export function AuthSubmitButton({ children }) {
  return (
    <button
      type="submit"
      className="text-center px-[10px] py-[12px] w-full bg-accent-primary text-white rounded-[8px]"
    >
      {children}
    </button>
  )
}
