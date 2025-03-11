import StrategyStepCard from '~/components/card/StrategyStepCard'
import SectionHeading from '~/components/shared/SectionHeading'
import { myStrategySteps } from '~/constants'
import {
  myStrategySectionBottomDescription,
  myStrategySectionBottomTitle,
  myStrategySectionTopDescription,
} from '~/ContentData'

const MyStrategy = () => {
  return (
    <section className="w-full lg:max-w-[1024px] md:max-w-[768px] pb-10 pt-[80px] px-[13px] md:px-[33px] lg:px-0 flex flex-col items-center mx-auto">
      {/* section heading */}
      <SectionHeading
        title="Your Videos Are Great but “no” VIEWS?"
        sectionName=""
        titleClass="lg:max-w-[541px] max-w-[295px]"
      />
      <p className="lg:max-w-[776px] md:max-w-[702px] max-w-[349px] leading-[160%] text-xl text-tertiary-text text-center font-medium font-bricolage pt-10 pb-20">
        {myStrategySectionTopDescription}
      </p>
      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-[30px] md:gap-5 gap-[30px] pb-20">
        {myStrategySteps?.map((card, index) => (
          <StrategyStepCard card={card} key={index} index={index} />
        ))}
      </div>
      <p className="md:max-w-[724px] max-w-[349px] leading-[160%] text-xl text-tertiary-text text-center font-medium font-bricolage pt-10 pb-20">
        {myStrategySectionBottomDescription}
      </p>

      <p className="md:max-w-[636px] max-w-[349px] text-[30px] leading-[140%] text-[rgba(0,0,0,0.75)] font-bold font-bricolage text-center">
        {myStrategySectionBottomTitle}
      </p>
    </section>
  )
}

export default MyStrategy
