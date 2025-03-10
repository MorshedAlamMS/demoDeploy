import { ScrollToSection } from "../ui-action/ScrollToSection";

export const Logo = () => {
  return (
    <button
      onClick={() => ScrollToSection("home")}
      className="p-1"
    >
      <img src="/Logo/logo.png" alt="logo" className="max-h-[40px] max-w-[100px]" />
    </button>
  );
};
