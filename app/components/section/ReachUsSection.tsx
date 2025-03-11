import ReachUsForm from '../form/ReachUsForm'
import SectionHeading from '../shared/SectionHeading'

const ReachUsSection = () => {
  return (
    <div className="px-[13px] py-[20px] md:px-[33px] md:py-[30px] lg:p-[70px]">
      {/* section heading */}
      <div id="contact">
        <SectionHeading
          title="Let's work together"
          sectionName="Contact me"
          titleClass="max-w-[258px] mx-auto mb-[80px]"
        />
      </div>

      {/* form */}
      <ReachUsForm />
    </div>
  )
}

export default ReachUsSection
