import { ScrollToSection } from "../ui-action/ScrollToSection";


const BannerButton = ({ buttonName, className, idName }: { buttonName: string, className: string, idName: string }) => {
    return (
        <button onClick={() => ScrollToSection(idName)} className={`px-5 h-[46px] font-bold font-gabarito rounded-[10px] flex flex-col items-center justify-center  transition-all duration-200 ease-in
              transform hover:scale-90 ${className}`}>
            {buttonName}
        </button>
    );
};

export default BannerButton;