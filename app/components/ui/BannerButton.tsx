import { ScrollToSection } from '../ui-action/ScrollToSection'

const BannerButton = ({
  buttonName,
  className,
  bgColor = '',
  idName,
}: {
  buttonName: string
  className: string
  bgColor?: string
  idName: string
}) => {
  return (
    <button
      style={{ backgroundColor: bgColor }}
      onClick={() => ScrollToSection(idName)}
      className={`border px-5 h-[46px] font-bold font-gabarito rounded-[10px] flex flex-col items-center justify-center  transition-all duration-200 ease-in
              transform hover:scale-90 ${className}`}
    >
      {buttonName}
    </button>
  )
}

export default BannerButton
