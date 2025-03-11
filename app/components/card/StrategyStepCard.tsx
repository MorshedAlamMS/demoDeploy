import { IStrategyStepCardPros } from "~/types";

const StrategyStepCard = ({index,card}:IStrategyStepCardPros) => {
    return (
        <div style={{background: card.bg}} key={index} className={`flex flex-col items-center lg:gap-[36px] md:gap-6 gap-[36px] lg:px-5 lg:py-4 md:px-[14px] md:py-[11px] px-5 py-4 rounded-[20px] shadow-noViewsCardShadow`}>
            <p className="text-[rgba(0,0,0,0.75)] text-[30px] md:text-xl lg:text-[30px] lg:leading-[140%] leading-[140%] font-bold font-bricolage">{card.title}</p>
            <div className="flex items-center justify-center">
                <img className="w-full h-full object-contain" src={card?.image} alt={card?.alt} />
            </div>
        </div>
    );
};

export default StrategyStepCard;