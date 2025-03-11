export default function InputField({
  label,
  type,
  name,
  required
}: {
  label: string;
  type: string;
  name: string;
  required:boolean
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
        id={name}
        type={type}
        required={required}
        name={name}
        className="w-full focus:outline mt-1 focus:outline-brand-parrot cursor-pointer outline-none bg-secondary-fill hover:bg-tertiary-fill rounded-[20px] px-4 py-3 h-[52px]"
      />
    </div>
  )
}
