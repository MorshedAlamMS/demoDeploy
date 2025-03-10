import { GetYourThumbnailButton } from "~/components/shared/GetYourThumbnailButton";
import SectionHeading from "~/components/shared/SectionHeading";

export const Image = ({
  className,
  imagePath,
}: {
  className?: string;
  imagePath: string;
}) => {
  return (
    <img
      className={`w-[22px] md:w-[42px] h-[22px] md:h-[42px] ${className}`}
      src={`/contact/${imagePath}`}
      alt="contact section"
    />
  );
};

const ContactSection = () => {
  return (
    <section className="w-full pb-10 pt-[140px] px-[13px] md:px-[33px] lg:px-[40px] lg:max-w-[1024px] mx-auto">
      {/* section container */}
      <div className="relative">
        {/* content div */}
        <div>
          {/* section heading */}
          <SectionHeading
            title="connect with us now!"
            sectionName=""
            titleClass="max-w-[211px] lg:max-w-[341px] mx-auto"
          />
          {/* section description */}
          <p className="mt-[42px] mb-[46px] lg:my-[36px] w-full md:max-w-[340px] lg:max-w-[614px] max-w-[349px] mx-auto text-center font-medium font-bricolage text-tertiary-text text-base lg:text-[20px] leading-[160%]">
          Got a project, an idea, or just a creative spark you want to explore? I’m all ears. Whether you need expert insights, collaboration, or just want to chat about possibilities.
          </p>

          {/* get your thumbnail done button */}
          <div className="flex items-center justify-center">
            <GetYourThumbnailButton />
          </div>
        </div>

        {/* image divs */}
        <div className="absolute -top-3 md:top-[4%] -rotate-3 md:-rotate-0 left-0 w-full">
          <div className="flex justify-between w-[70%] md:w-[80%] mx-auto">
            <Image className="mb-[20px]" imagePath="1.png" />
            <Image className="mb-[20px]" imagePath="2.png" />
          </div>
        </div>

        <div className="flex justify-between absolute top-[10%] md:top-[30%] lg:top-[44%] left-0 w-full rotate-0 md:rotate-2 lg:rotate-3">
          <Image className="mb-[20px] ml-6 md:ml-0" imagePath="3.png" />
          <Image className="mb-[20px] mr-2 md:mr-0" imagePath="4.png" />
        </div>

        <div className="absolute bottom-[53%] md:bottom-[12%] lg:bottom-0 left-0 rotate-3 lg:-rotate-2 w-full">
          <div className="flex justify-between w-[70%] md:w-[80%] mx-auto">
            <Image className="mb-[20px]" imagePath="5.png" />
            <Image className="mb-[20px]" imagePath="6.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
