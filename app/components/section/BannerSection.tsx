// import BannerSvg from "../svg/BannerSvg";
import ClickMeTopSvg from "../svg/ClickMeTopSvg";
import StarSvg from "../svg/StarSvg";
import BannerButton from "../ui/BannerButton";
import Clients from "./home/Clients";


const BannerSection = () => {
    return (
        <section id="home" style={{ backgroundImage: "url('/Vector.png')", backgroundSize: "repeat" }} className="py-5 transform -translate-y-[140px] lg:h-[806px] h-[692px]">
            {/* banner top content */}
            <div className="lg:max-w-[630px] max-w-[365px] mx-auto flex flex-col items-center justify-center mb-20 pt-[140px]">
                {/* image */}
                <div className="lg:w-[200px] lg:h-[240px] w-[140px] h-[168px] pb-10 lg:mt-0 md:mt-[80px] mt-[50px]">
                    <img className="w-full lg:h-[240px] h-[168px] object-contain" src="/bannerImage.png" alt="Avater" />
                </div>
                {/* middle content */}
                <div className="text-primary-text text-center lg:text-[55px] text-[30px] leading-[120%] -tracking-[1.5px] lg:-tracking-[2.75px] mt-[30px] font-bold font-sans capitalize pb-10">
                    <p>I design thumbnails</p>
                    <div className="flex gap-[10px]">
                        <p>that make people</p>
                        <div className="relative">
                            <p className="px-[10px] bg-brand-parrot rotate-[-2deg]">
                                click!
                            </p>
                            {/* top right corner svg */}
                            <span className="absolute -top-4 -right-4">
                                <ClickMeTopSvg />
                            </span>
                        </div>
                    </div>
                </div>
                {/* buttons */}
                <div className="flex gap-[14px]">
                    <BannerButton idName="works" buttonName={"See works"} className={"bg-[rgba(0,0,0,0.10)] text-primary-text"} />
                    <BannerButton idName="contact" buttonName={"Contact Me"} className={"bg-[#252B37] text-white"} />
                </div>

                {/* feedback */}
                <div className="max-w-[206px] flex items-center gap-[9px] pt-10">
                    <div className="flex items-center">
                        <img src="/feedback1.png" alt="Feedback" />
                        <img className="ml-[-5px] z-10" src="/feedback2.png" alt="Feedback" />
                    </div>
                    {/* stars */}
                    <div>
                        <div className="flex items-center gap-[6px]">
                            <div className="flex">
                                <StarSvg />
                                <StarSvg />
                                <StarSvg />
                                <StarSvg />
                                <StarSvg />
                            </div>
                            <p className="text-secondary-text text-sm font-medium"><span className="font-bold">5</span> Stars</p>
                        </div>
                        <p className="text-xs text-tertiary-text font-medium">On Upwork & Contra</p>
                    </div>
                </div>
            </div>
            {/* marquee section */}
            <Clients />

            {/* banner background svg */}
            {/* <div className="absolute -top-[120px]">
                <BannerSvg />
            </div> */}
        </section>
    );
};

export default BannerSection;
