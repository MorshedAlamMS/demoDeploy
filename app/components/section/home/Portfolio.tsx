import { Link } from "@remix-run/react";
import ClientWorkCard from "~/components/card/ClientWorkCard";
import SectionHeading from "~/components/shared/SectionHeading";
import { Marquee } from "~/components/ui/marquee";
import { clientsWork } from "~/constants";

const Portfolio = () => {
  return (
    <section id="works" className="lg:pt-[100px] pt-[90px] pb-[60px]">
      <SectionHeading
        title="Works I did for my clients"
        sectionName="Portfolio"
        titleClass="lg:max-w-[349px] md:max-w-[216px] max-w-[180px]"
      />
      <div className="lg:mt-[80px] mt-[50px]">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {clientsWork.map((client, index) => (
              <ClientWorkCard key={index} {...client} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s] lg:mt-[60px] mt-1">
            {clientsWork.map((client, index) => (
              <ClientWorkCard key={index} {...client} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background lg:flex hidden"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background lg:flex hidden"></div>
        </div>
        {/* show all button */}
        <Link to="/portfolio" className="w-fit flex flex-col items-center justify-center mx-auto lg:mt-[80px] mt-[50px] px-5 h-[46px] font-bold font-gabarito bg-brand-parrot text-primary-text rounded-[10px] hover:rounded-xl text-base transition-all duration-200 ease-in transform hover:scale-95">Show All</Link>
      </div>
    </section>
  );
};

export default Portfolio;