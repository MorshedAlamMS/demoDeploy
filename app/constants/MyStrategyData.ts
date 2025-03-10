import { myStrategySectionStepOne, myStrategySectionStepThree, myStrategySectionStepTwo, stepOneCardColor, stepThreeCardColor, stepTwoCardColor } from "~/ContentData";
import { IMyStrategySteps } from "~/types";

export const myStrategySteps : IMyStrategySteps[] = [
    {
        title: myStrategySectionStepOne,
        image: "/MyStrategySectionImages/step1.png",
        alt: "Thumbnail",
        bg: `bg-[${stepOneCardColor}]`
    },
    {
        title: myStrategySectionStepTwo,
        image: "/MyStrategySectionImages/step2.png",
        alt: "Thumbnail",
        bg: `bg-[${stepTwoCardColor}]`
    },
    {
        title: myStrategySectionStepThree,
        image: "/MyStrategySectionImages/step3.png",
        alt: "Thumbnail",
        bg: `bg-[${stepThreeCardColor}]`
    },
]