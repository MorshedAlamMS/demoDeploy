import BannerSection from "~/components/section/BannerSection";
import FAQSection from "~/components/section/FAQSection";
import ContactSection from "~/components/section/home/ContactSection";
import Portfolio from "~/components/section/home/Portfolio";
import Process from "~/components/section/home/Process";
import Testimonials from "~/components/section/home/Testimonials";
import VideosButNoViews from "~/components/section/home/VideosButNoViews";
import VideoSection from "~/components/section/home/VideoSection";
import ReachUsSection from "~/components/section/ReachUsSection";
import AboutMeSection from "~/components/section/home/AboutMeSection";

const Home = () => {
  return (
    <>
      {/* banner */}
      <div className="lg:space-y-[100px] md:space-y-[90px] space-y-[40px]">
        <BannerSection />
        <Portfolio />
        <AboutMeSection />
        <VideosButNoViews />
        <Process />
        <VideoSection />
        <Testimonials />
        <FAQSection />
        <ContactSection />
        <ReachUsSection />
      </div>
    </>
  );
};

export default Home;
