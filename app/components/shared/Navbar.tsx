import { useEffect, useState } from "react";
import { Logo } from "../svg/Logo";

export const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    const offset = 100; // Offset to account for the navbar height
    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: sectionPosition - offset, behavior: "smooth" });
  }
};

const NavLink = ({
  id,
  children,
  activeSection,
}: {
  id: string;
  children: React.ReactNode;
  activeSection: string;
}) => {
  const isActive = activeSection === id;
  return (
    <button
      onClick={() => scrollToSection(id)}
      className={`${buttonClass} ${isActive ? "bg-white" : ""}`}
    >
      {children}
    </button>
  );
};

const buttonClass =
  "lg:px-[14px] px-2 flex items-center justify-center rounded-xl text-primary-text text-sm font-bricolage hover:bg-[#0000001A] transition-colors duration-500 ease-in-out h-full";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = ["home", "works", "about", "contact"];
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
      <button onClick={() => scrollToSection("home")} className={buttonClass}>
        <Logo />
      </button>
      <div className="lg:max-w-[277px] max-w-[241px] p-[3px] rounded-[14px] bg-[#F2F2E9] h-10 flex items-center gap-1">
        <NavLink id="works" activeSection={activeSection}>
          Portfolio
        </NavLink>
        <NavLink id="about" activeSection={activeSection}>
          About Me
        </NavLink>
        <NavLink id="contact" activeSection={activeSection}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
