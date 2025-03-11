import {
  myStrategySectionImages,
  myStrategySectionStepTitle,
  stepCardColor,
} from '~/ContentData'
import { IMyStrategySteps } from '~/types'

export const myStrategySteps: IMyStrategySteps[] =
  myStrategySectionStepTitle.map((step, index) => ({
    title: step,
    image: `/MyStrategySectionImages/${myStrategySectionImages[index]}`,
    alt: 'Thumbnail',
    bg: `${stepCardColor[index]}`,
  }))
