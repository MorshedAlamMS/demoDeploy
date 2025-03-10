import { ScrollToSection } from "~/components/ui-action/ScrollToSection";
import { buttonClass } from "./constant";

export const NavLink = ({
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
      onClick={() => ScrollToSection(id)}
      className={`${buttonClass} ${isActive ? "bg-white" : ""}`}
    >
      {children}
    </button>
  );
};
