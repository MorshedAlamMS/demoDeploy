import { GetYourThumbnailButton } from "../shared/GetYourThumbnailButton";
import SectionHeading from "../shared/SectionHeading";
import WhoMakeUrThumbnailSvg from "../svg/WhoMakeUrThumbnailSvg";


const WhoMakingUrThumbnail = () => {
    return (
        <section className="lg:max-w-[1024px] md:max-w-[768px] w-full mx-auto lg:px-0 md:px-[33px] px-[13px]  md:pt-[100px] md:pb-20 flex flex-col md:flex-row items-center md:justify-between justify-center gap-[88px]">
            {/* left content */}
            <div id="about" className="lg:space-y-[50px] space-y-10 flex flex-col items-center">
                <SectionHeading sectionName="About me" title="Who’s Making Your Thumbnails?" titleClass="lg:max-w-[444px] max-w-[230px]" />
                <div className="lg:space-y-8 space-y-7">
                    <p className={pClass}>Hey, I’m <span className="text-primary-text font-bold">Thumbnail Boss,</span> the guy who designs thumbnails that make people stop, look, and click.</p>
                    <p className={pClass}>I’ve worked with YouTube creators to create scroll-stopping thumbnails. My goal? To make your content impossible to ignore.</p>
                </div>
                {/* get your thumbnai button */}
                <GetYourThumbnailButton />
            </div>
            {/* svg image */}
            <div>
                <WhoMakeUrThumbnailSvg />
            </div>

        </section>
    );
};

export default WhoMakingUrThumbnail;

const pClass = "text-tertiary-text text-center lg:text-xl text-base font-bricolage font-normal"