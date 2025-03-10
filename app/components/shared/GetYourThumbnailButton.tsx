import { scrollToSection } from "./Navbar";

export const GetYourThumbnailButton = () => {
  return (
    // keep z index to keep it clickable in contact section as multiple images are overlapping in that section
    <button onClick={() => scrollToSection("contact")} className="z-50 px-5 py-2 leading-6 text-base hover:cursor-pointer hover:text-[15px] bg-brand-parrot text-primary-text font-bold font-gabarito rounded-[10px] hover:scale-90 transition-all duration-300 ease-in-out">
      Get Your Thumbnail Done!
    </button>
  );
};
