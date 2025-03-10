import ProcessCard from "~/components/card/ProcessCard";
import SectionHeading from "~/components/shared/SectionHeading";
import ArrowSvg from "~/components/svg/process/ArrowSvg";
import CopyEmail from "~/components/ui-action/CopyEmail";
import { processData } from "~/constants";

const Process = () => {
    return (
        <section className="mt-[80px] md:px-0 px-2">
            <SectionHeading
            title="Here Is How We Proceed"
            sectionName="Process"
            titleClass="lg:max-w-[299px] max-w-[185px]"
            />
            {/* Process Section */}
            <div className="flex md:flex-row flex-col max-w-[1024px] mx-auto justify-center lg:mt-[80px] mt-[60px]">
                <div className="flex md:justify-normal justify-between">
                    {/* maping first 3 process data */}
                    {processData.slice(0,3).map((process,index)=><div className="flex relative items-center" key={index}>
                        <ProcessCard {...process}/>
                        <div className={`transform flex md:hidden lg:-translate-y-2 translate-y-3 ${index === 1 && "translate-x-5"}`}>
                        {2 !== index && <ArrowSvg/>}
                        </div>
                        <div 
                        className={`transform md:flex md:absolute -right-3 hidden ${index === 0 && "-translate-x-3"} lg:-translate-y-2 translate-y-3`}
                        >
                         <ArrowSvg/>
                        </div>
                    </div>)}
                </div>
                {/* maping second 2 process data */}
                <div className="flex md:justify-normal justify-center">
                    {processData.slice(3,5).map((process,index)=><div className="flex items-center" key={index}>
                        {/* condition for show arrow in first in mobile device */}
                        <div className="transform md:hidden flex lg:-translate-y-2 translate-y-3">
                        {0== index && <ArrowSvg/>}
                        </div>
                        {/* Card render */}
                        <ProcessCard {...process}/>
                        {/* condition for showing arrow */}
                        <div className="transform lg:-translate-y-2 translate-y-3">
                        {1 !== index && <ArrowSvg/>}
                        </div>
                    </div>)}
                </div>
            </div>
            {/* Email Copy Section */}
            <div className="flex justify-center lg:mt-[80px] mt-[60px]">
            <CopyEmail/>
            </div>
        </section>
    );
};

export default Process;