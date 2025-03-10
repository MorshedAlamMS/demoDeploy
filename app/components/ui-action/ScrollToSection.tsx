export const ScrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    const offset = 100; // Offset to account for the navbar height
    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: sectionPosition - offset, behavior: "smooth" });
  }
};