import { introPartOne, imageName, name, introPartTwo } from '~/ContentData'
import { GetYourThumbnailButton } from '../../shared/GetYourThumbnailButton'
import SectionHeading from '../../shared/SectionHeading'

/**
 * A section component for the about me page.
 *
 * This component renders a section with a heading, two paragraphs, a "Get your thumbnail" button, and an image. The image is fetched from the public/AboutMeImages directory and the file name is specified in the ContentData file.
 *
 * The section is styled to have a maximum width of 1024px on large screens and 768px on medium screens. It is centered horizontally and has padding on the left and right sides of 33px on medium screens and 13px on small screens. The top padding is 100px on medium screens and 20px on small screens.
 *
 * The left content is styled to have a gap of 50px between elements on large screens and 10px on small screens. The heading is styled to have a maximum width of 444px on large screens and 230px on small screens. The paragraphs are styled to have a gap of 8px between elements on large screens and 7px on small screens. The button is centered horizontally.
 *
 * The image is styled to take up the full width of its parent element.
 */
const AboutMeSection = () => {
  return (
    <section className="lg:max-w-[1024px] md:max-w-[768px] w-full mx-auto lg:px-0 md:px-[33px] px-[13px]  md:pt-[100px] md:pb-20 grid grid-cols-1 md:grid-cols-2 items-center gap-[88px]">
      {/* left content */}
      <div
        id="about"
        className="lg:space-y-[50px] space-y-10 flex flex-col items-center"
      >
        <SectionHeading
          sectionName="About me"
          title="Who’s Making Your Thumbnails?"
          titleClass="lg:max-w-[444px] max-w-[230px]"
        />
        {/* paragraphs */}
        <div className="lg:space-y-8 space-y-7">
          <p className={pClass}>
            Hey, I’m <span className="text-primary-text font-bold">{name}</span>{' '}
            {introPartOne}
          </p>
          <p className={pClass}>{introPartTwo}</p>
        </div>
        {/* get your thumbnail button */}
        <GetYourThumbnailButton />
      </div>
      {/* image */}
      <div>
        <img src={`/AboutMeImages/${imageName}`} alt="About me" />
      </div>
    </section>
  )
}

export default AboutMeSection

const pClass =
  'text-tertiary-text text-center lg:text-xl text-base font-bricolage font-normal'
