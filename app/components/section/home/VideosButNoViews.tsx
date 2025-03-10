import SectionHeading from "~/components/shared/SectionHeading";

const cards = [
    {
        title: "If people don’t click, they’ll never watch.",
        image: "/videosButNoViews/image1.png",
        alt: "Thumbnail",
        bg: "bg-[#FEE690]"
    },
    {
        title: "If your thumbnail blends in, your video disappears.",
        image: "/videosButNoViews/image2.png",
        alt: "Thumbnail",
        bg: "bg-[#D5C9EE]"
    },
    {
        title: "If your title doesn’t spark curiosity, they scroll past.",
        image: "/videosButNoViews/image3.png",
        alt: "Thumbnail",
        bg: "bg-[#D4E2A7]"
    },
]

const VideosButNoViews = () => {
    return (
        <section className="w-full lg:max-w-[1024px] md:max-w-[768px] pb-10 pt-[80px] px-[13px] md:px-[33px] lg:px-0 flex flex-col items-center mx-auto">
            {/* section heading */}
            <SectionHeading title="Your Videos Are Great but “no” VIEWS?" sectionName="" titleClass="lg:max-w-[541px] max-w-[295px]" />
            <p className="lg:max-w-[776px] md:max-w-[702px] max-w-[349px] leading-[160%] text-xl text-tertiary-text text-center font-medium font-bricolage pt-10 pb-20">Don’t Let Bad Thumbnails Hold You Back! Every creator wants more views, more engagement, more growth but the harsh truth? Great content alone isn’t enough.</p>
            {/* cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-[30px] md:gap-5 gap-[30px] pb-20">
                {cards?.map((card, index) => (
                    <div key={index} className={`flex flex-col items-center lg:gap-[36px] md:gap-6 gap-[36px] lg:px-5 lg:py-4 md:px-[14px] md:py-[11px] px-5 py-4 rounded-[20px] shadow-noViewsCardShadow ${card?.bg}`}>
                        <p className="text-[rgba(0,0,0,0.75)] text-[30px] md:text-xl lg:text-[30px] lg:leading-[140%] leading-[140%] font-bold font-bricolage">{card.title}</p>
                        <div className="flex items-center justify-center">
                            <img className="w-full h-full object-contain" src={card?.image} alt={card?.alt} />
                        </div>
                    </div>
                ))}
            </div>
            <p className="md:max-w-[724px] max-w-[349px] leading-[160%] text-xl text-tertiary-text text-center font-medium font-bricolage pt-10 pb-20">Big creators invest in their thumbnails because they know the first impression makes or breaks a video. You’ve put in the effort—don’t let a bad thumbnail cost you thousands of views.</p>

            <p className="md:max-w-[636px] max-w-[349px] text-[30px] leading-[140%] text-[rgba(0,0,0,0.75)] font-bold font-bricolage text-center">⏳ Get a high-performing thumbnail today before your competition beats you to it!</p>
        </section>
    );
};

export default VideosButNoViews;
