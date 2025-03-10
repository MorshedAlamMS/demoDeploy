import DesignSvg from "~/components/svg/process/DesignSvg";
import HelloSvg from "~/components/svg/process/HelloSvg";
import MessageSvg from "~/components/svg/process/MessageSvg";
import PaymentSvg from "~/components/svg/process/PaymentSvg";
import RevisionSvg from "~/components/svg/process/RevisionSvg";
import { IProcess } from "~/types";

export const processData : IProcess[] = [
    {
        icon:<HelloSvg/>,
        title:"Say Hello",
        description:"You reach out to me via email with your request.",
        titleClass:"lg:max-w-[48px] max-w-[36px] "
    },
    {
        icon:<MessageSvg/>,
        title:"We Discuss Your Project",
        description:"We discuss your video topic the style, pricing and turnaround time.",
        titleClass:"lg:max-w-[117px] max-w-[88px] "
    },
    {
        icon:<PaymentSvg/>,
        title:"You Send Payment",
        description:"Once we finalize the details, you send the payment to kick off the work.",
        titleClass:"lg:max-w-[89px] max-w-[67px] "
    },
    {
        icon:<DesignSvg/>,
        title:"We Design Designing",
        description:"I design a scroll-stopping, high-CTR thumbnail based on our discussion.",
        titleClass:"lg:max-w-[101px] max-w-[76px] "
    },
    {
        icon:<RevisionSvg/>,
        title:"Revision if you need",
        description:" If you want any tweaks, I make adjustments to ensure it’s perfect.",
        titleClass:"lg:max-w-[106px] max-w-[80px] "
    }
]