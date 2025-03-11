export default function TextareaField({
  label,
  name,
  onChange,
  value,
}: {
  label: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
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
      <textarea
        id={name}
        name={name}
        defaultValue={value}
        onChange={e => onChange(e)}
        className="w-full outline-none mt-1 focus:outline-brand-parrot focus:outline cursor-pointer bg-secondary-fill hover:bg-tertiary-fill  rounded-[20px] px-4 py-3 h-[118px]"
      />
    </div>
  )
}
