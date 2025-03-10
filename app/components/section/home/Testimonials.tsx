import ClientReviewCard from "~/components/card/ClientReviewCard";
import SectionHeading from "~/components/shared/SectionHeading";
import { Marquee } from "~/components/ui/marquee";
import { clientReviewFirstCol, clientReviewSecondCol, clientReviewThirdCol, clientsReviews } from "~/constants";

const Testimonials = () => {
    return (
        <section className="container max-w-[1024px] mx-auto lg:pb-[180px] pb-[80px] pt-[80px]">
            <SectionHeading
                title="What People Say About us"
                sectionName="Testimonials"
                titleClass="lg:max-w-[331px] max-w-[205px]"
            />
            <div className="mt-[50px] px-0 md:px-[33px] lg:px-0">
                {/* Large device  */}
                <div className="relative hidden h-[654px] w-full flex-row items-center justify-center overflow-hidden lg:flex">
                    <Marquee pauseOnHover vertical className="[--duration:10s]">
                        {clientReviewFirstCol.map((review, Index) => (
                            <ClientReviewCard key={Index} {...review} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover vertical className="[--duration:10s] lg:flex md:flex hidden">
                        {clientReviewSecondCol.map((review, Index) => (
                            <ClientReviewCard key={Index} {...review} />
                        ))}
                    </Marquee>
                    <Marquee pauseOnHover vertical className="[--duration:10s] lg:flex hidden">
                        {clientReviewThirdCol.map((review, Index) => (
                            <ClientReviewCard key={Index} {...review} />
                        ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
                </div>
                {/* medium device */}
                <div className="relative md:flex lg:hidden hidden h-[654px] w-full flex-row items-center justify-center overflow-hidden">
                    <Marquee pauseOnHover vertical className="[--duration:15s]">
                        {clientsReviews.slice(0,6).map((review, Index) => (
                            <ClientReviewCard key={Index} {...review} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover vertical className="[--duration:15s] lg:flex md:flex hidden">
                        {clientsReviews.slice(7,14).map((review, Index) => (
                            <ClientReviewCard key={Index} {...review} />
                        ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
                </div>
                {/* small device */}
                <div className="relative flex md:hidden h-[654px] w-full flex-row items-center justify-center overflow-hidden">
                    <Marquee pauseOnHover vertical className="[--duration:10s]">
                        {clientsReviews.map((review, Index) => (
                            <ClientReviewCard key={Index} {...review} />
                        ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;