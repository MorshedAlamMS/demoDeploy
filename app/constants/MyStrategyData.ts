import { myStrategySectionStepOne, myStrategySectionStepThree, myStrategySectionStepTwo } from "~/ContentData";
import { IMyStrategySteps } from "~/types";

export const myStrategySteps : IMyStrategySteps[] = [
    {
        title: myStrategySectionStepOne,
        image: "/MyStrategySectionImages/step1.png",
        alt: "Thumbnail",
        bg: "bg-[#FEE690]"
    },
    {
        title: myStrategySectionStepTwo,
        image: "/MyStrategySectionImages/step2.png",
        alt: "Thumbnail",
        bg: "bg-[#D5C9EE]"
    },
    {
        title: myStrategySectionStepThree,
        image: "/MyStrategySectionImages/step3.png",
        alt: "Thumbnail",
        bg: "bg-[#D4E2A7]"
    },
]