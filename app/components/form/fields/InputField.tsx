export default function InputField({
  label,
  type,
  name,
  onChange,
  value,
}: {
  label: string
  type: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}) {
  return (
    <div className="flex flex-col w-full">
      {/* label */}
      <label
        className="text-[18px] font-bricolage font-medium leading-[160%] text-primary-text"
        htmlFor={name}
      >
        {label}
      </label>

      {/* input */}
      <input
        onChange={e => onChange(e)}
        id={name}
        type={type}
        defaultValue={value}
        name={name}
        className="w-full focus:outline mt-1 focus:outline-brand-parrot cursor-pointer outline-none bg-secondary-fill hover:bg-tertiary-fill rounded-[20px] px-4 py-3 h-[52px]"
      />
    </div>
  )
}
