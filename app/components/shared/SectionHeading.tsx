import { ISectionHeading } from '~/types'

const SectionHeading = ({
  title,
  sectionName,
  titleClass,
}: ISectionHeading) => {
  return (
    <div className="flex flex-col items-center">
      {sectionName && (
        <p className="text-secondary-text w-fit text-sm text-center font-semibold py-1 font-bricolage flex items-center gap-x-[6px] px-2 rounded-lg border border-brand-parrot">
          <span className="w-[7px] h-[7px] bg-brand-parrot rounded-full"></span>{' '}
          {sectionName}
        </p>
      )}
      <h2
        className={`${titleClass} text-primary-text text-center  lg:text-[55px] text-[30px] leading-[120%] -tracking-[1.5px] lg:-tracking-[1.75px] mt-[30px] font-bold font-sans capitalize`}
      >
        {title}
      </h2>
    </div>
  )
}

export default SectionHeading
