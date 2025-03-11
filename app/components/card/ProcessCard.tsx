import { IProcess } from '~/types'

const ProcessCard = ({ icon, title, titleClass, description }: IProcess) => {
  return (
    <div className="lg:w-[203px] lg:h-[220px] h-[167px] md:w-[139px] w-[104px] flex flex-col items-center">
      <div className="">{icon}</div>
      <div className="text-secondary-text lg:text-xl h-[48px] lg:mt-[18px] mt-[13.5px] text-[15px] text-center font-medium leading-[160%] font-bricolage">
        <p className={titleClass}>{title}</p>
      </div>
      <div className="lg:w-[143.2px] w-[103.5px] lg:mt-[18px] mt-[13.5px] text-tertiary-text font-bricolage lg:text-sm text-[10.5px] text-center font-medium leading-[160%] ">
        <p className="">{description}</p>
      </div>
    </div>
  )
}

export default ProcessCard
