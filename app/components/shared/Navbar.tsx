import { Logo } from "../svg/Logo";


/**
 * Smoothly scrolls to the given HTML element with the given id.
 * @param {string} id - The id of the element to scroll to.
 */
export const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    const offset = 100; // * 100 px to account for the navbar
    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: sectionPosition - offset, behavior: "smooth" });
  }
};

const Navbar = () => {
  return (
    <nav className="lg:max-w-[850px] bg-white rounded-[10px] md:max-w-[768px] w-full mx-auto lg:p-3 md:px-[33px] px-[13px] py-5 flex items-center justify-between lg:mt-5 sticky md:top-5 top-0 z-[1000]">
      <button
        onClick={() => scrollToSection("home")}
        className={`${buttonClass}`}
      >
        <Logo />
      </button>
      <div className="lg:max-w-[277px] max-w-[241px] p-[3px] rounded-[14px] bg-[#F2F2E9] h-10 flex items-center gap-1">
        <button
          onClick={() => scrollToSection("works")}
          className={`${buttonClass}`}
        >
          Portfolio
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className={`${buttonClass}`}
        >
          About Me
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className={`${buttonClass}`}
        >
          Contact
        </button>
      </div>
    </nav>
  );
};
export default Navbar;

// this is button class
const buttonClass =
  "lg:px-[14px] px-2 flex items-center justify-center rounded-xl text-primary-text text-sm font-bricolage hover:bg-[#0000001A] transition-colors duration-500 ease-in-out h-full";
