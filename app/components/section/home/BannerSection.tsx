import {
  heroSectionTitle,
  heroSectionProfileImage,
  feedBackPlatformImagesName,
  feedBackPlatformName,
  feedBackStar,
  buttonsBgColor,
} from '~/ContentData'
import ClickMeTopSvg from '../../svg/ClickMeTopSvg'
import StarSvg from '../../svg/StarSvg'
import BannerButton from '../../ui/BannerButton'
import Clients from './Clients'
import { nanoid } from 'nanoid'

const BannerSection = () => {
  // Error handling: Ensure bannerTitle is a valid string
  const validTitle =
    typeof heroSectionTitle === 'string' && heroSectionTitle.trim().length > 0
      ? heroSectionTitle
      : 'Your awesome title goes here'
  const words = validTitle.split(' ')

  if (words.length === 0) return null

  // Always extract the last word for special styling
  const lastWord = words[words.length - 1]
  // Determine the split index for the remaining words (excluding the last word)
  const remainingWords = words.slice(0, words.length - 1)
  const splitIndex = Math.ceil(remainingWords.length / 2)
  // First part: the first half of the remaining words
  const firstPart = remainingWords.slice(0, splitIndex).join(' ')
  // Middle part: the second half of the remaining words
  const middlePart = remainingWords.slice(splitIndex).join(' ')

  // Ensure buttonsBgColor contains valid values
  const buttonsBgColors = buttonsBgColor
    ? buttonsBgColor
    : ['#60A5FA', '#252B37']

  return (
    <section
      id="home"
      style={{
        backgroundImage: "url('/Vector.png')",
        backgroundSize: 'repeat',
      }}
      className="py-5 transform -translate-y-[140px] lg:h-[806px] h-[692px]"
    >
      {/* Banner Top Content */}
      <div className="lg:max-w-[630px] max-w-[365px] mx-auto flex flex-col items-center justify-center mb-20 pt-[140px]">
        {/* Image */}
        <div className="lg:w-[200px] lg:h-[240px] w-[140px] h-[168px] pb-10 lg:mt-0 md:mt-[80px] mt-[50px]">
          <img
            className="w-full lg:h-[240px] h-[168px] object-contain"
            src={`/Banner/${heroSectionProfileImage}`}
            alt="Avatar"
          />
        </div>
        {/* Title Content */}
        <h1 className="text-primary-text text-center lg:text-[55px] text-[30px] leading-[120%] -tracking-[1.5px] lg:-tracking-[2.75px] mt-[30px] font-bold font-sans capitalize pb-10">
          <p>{firstPart}</p>
          <div className="flex gap-[10px] justify-center items-center">
            {middlePart && <p className="whitespace-nowrap">{middlePart}</p>}
            <div className="relative">
              <p className="px-[10px] bg-brand-parrot rotate-[-2deg]">
                {/* last word of banner title */}
                {lastWord}
              </p>
              {/* top right corner svg */}
              <span className="absolute -top-4 -right-4">
                <ClickMeTopSvg />
              </span>
            </div>
          </div>
        </h1>
        {/* Buttons */}
        <div className="flex gap-[14px]">
          <BannerButton
            idName="works"
            buttonName="See works"
            className={`bg-[${buttonsBgColors[0]}] text-primary-text border`}
          />
          <BannerButton
            idName="contact"
            buttonName="Contact Me"
            className={`bg-[${buttonsBgColors[1]}] text-white border`}
          />
        </div>
        {/* Feedback Section */}
        <div className="max-w-[206px] flex items-center gap-[9px] pt-10">
          <div className="flex items-center">
            <img
              src={`/feedback/${feedBackPlatformImagesName[0]}`}
              alt="Feedback"
            />
            <img
              className="ml-[-5px] z-10"
              src={`/feedback/${feedBackPlatformImagesName[1]}`}
              alt="Feedback"
            />
          </div>
          <div>
            <div className="flex items-center gap-[6px]">
              <div className="flex">
                {!!feedBackStar &&
                  Array.from({ length: Math.floor(feedBackStar) }).map(() => (
                    <StarSvg key={nanoid()} />
                  ))}
              </div>
              <p className="text-secondary-text text-sm font-medium">
                <span className="font-bold">{feedBackStar}</span> Stars
              </p>
            </div>
            <p className="text-xs text-tertiary-text font-medium">
              On {feedBackPlatformName.join(' , ')}
            </p>
          </div>
        </div>
      </div>
      {/* Clients / Marquee Section */}
      <Clients />
    </section>
  )
}

export default BannerSection
