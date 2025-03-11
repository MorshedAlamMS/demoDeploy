import { ScrollToSection } from "~/components/ui-action/ScrollToSection";
import { logo } from "~/ContentData/Logo";


const FooterLogo = () => {
    return (
        <button className="w-[120px] h-[60px] overflow-hidden" onClick={() => ScrollToSection("home")}>
            <img className="w-full h-full object-contain" src={`/Logo/${logo}`} alt="Logo" />
        </button>
    );
};

export default FooterLogo;