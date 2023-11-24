export function AuthInput({ Icon, label, inputProps = {} }) {
  return (
    <label className="relative">
      <span className="block absolute left-[8px] top-1/2 -translate-y-1/2">
        <Icon />
      </span>
      <input
        {...inputProps}
        className="bg-[#EDF1FA] pl-[40px] border border-[#EDF1FA] py-[17px] pr-[8px] w-full rounded-[4px]"
      />
    </label>
  )
}

export function AuthSubmitButton({ children }) {
  return (
    <button
      type="submit"
      className="text-center px-[10px] py-[12px] w-full bg-accent-primary rounded-[8px]"
    >
      {children}
    </button>
  )
}
