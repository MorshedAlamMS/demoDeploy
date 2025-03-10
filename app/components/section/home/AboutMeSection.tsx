import { aboutMeContent, aboutMeImageName } from "~/ContentData/index";
import { GetYourThumbnailButton } from "../../shared/GetYourThumbnailButton";
import SectionHeading from "../../shared/SectionHeading";
import { nanoid } from "nanoid";

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
        <div className="lg:space-y-8 space-y-7">
          {aboutMeContent.map((paragraph) => (
            <p key={nanoid()} className={pClass}>
              {paragraph}
            </p>
          ))}
        </div>
        {/* get your thumbnail button */}
        <GetYourThumbnailButton />
      </div>
      {/* image */}
      <div>
        <img src={`/AboutMeImages/${aboutMeImageName}`} alt="About me" />
      </div>
    </section>
  );
};

export default AboutMeSection;

const pClass =
  "text-tertiary-text text-center lg:text-xl text-base font-bricolage font-normal";
