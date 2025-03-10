import DesignSvg from "~/components/svg/process/DesignSvg";
import HelloSvg from "~/components/svg/process/HelloSvg";
import MessageSvg from "~/components/svg/process/MessageSvg";
import PaymentSvg from "~/components/svg/process/PaymentSvg";
import RevisionSvg from "~/components/svg/process/RevisionSvg";
import { myWorkProcess } from "~/ContentData";
import { IProcess } from "~/types";


const icons  = [<HelloSvg key={0}/>,<MessageSvg key={1}/>,<PaymentSvg key={2}/>,<DesignSvg key={3}/>,<RevisionSvg key={4}/>]

const titleClass =["lg:max-w-[48px] max-w-[36px]","lg:max-w-[117px] max-w-[88px]","lg:max-w-[89px] max-w-[67px]","lg:max-w-[101px] max-w-[76px]","lg:max-w-[106px] max-w-[80px]"] 

export const processData : IProcess[] = myWorkProcess.map((process,index) => ({
            icon:icons[index],
            title:process.processTitle,
            description:process.processDescription,
            titleClass:titleClass[index]
        }))
