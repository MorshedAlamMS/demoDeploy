import { useEffect, useState } from "react";
import { Logo } from "~/components/svg/Logo";
import { ScrollToSection } from "~/components/ui-action/ScrollToSection";
import { NavLink } from "./utils/NavLInk";
import { buttonClass, navLinks, sectionIds } from "./utils/constant";

/**
 * The main navigation bar of the website.
 *
 * The navigation bar is fixed to the top of the screen and contains links to the main sections of the website.
 * It uses the IntersectionObserver API to automatically update the active link when the user scrolls to a section.
 *
 * @returns The JSX element for the navigation bar.
 */
const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observerOptions = {
      threshold: 0.6,
    };

    // Create an observer for each section
    const observers = sectionIds.map((id) => {
      const element = document.getElementById(id);
      if (!element) return;
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        });
      }, observerOptions);
      observer.observe(element);
      return observer;
    });

    // Clean up the observers on unmount
    return () => {
      observers.forEach((observer) => observer && observer.disconnect());
    };
  }, []);

  return (
    <nav className="lg:max-w-[850px] bg-white rounded-[10px] md:max-w-[768px] w-full mx-auto lg:p-3 md:px-[33px] px-[13px] py-5 flex items-center justify-between lg:mt-5 sticky md:top-5 top-0 z-[1000]">
      <button onClick={() => ScrollToSection("home")} className={buttonClass}>
        <Logo />
      </button>
      <div className="lg:max-w-[277px] max-w-[241px] p-[3px] rounded-[14px] bg-[#F2F2E9] h-10 flex items-center gap-1">
        {navLinks.map((link) => (
          <NavLink key={link.id} id={link.id} activeSection={activeSection}>
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
