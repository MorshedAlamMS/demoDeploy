// Importing necessary components and assets
import ProcessCard from '~/components/card/ProcessCard' // Card component for each process step
import SectionHeading from '~/components/shared/SectionHeading' // Reusable heading component for the section
import ArrowSvg from '~/components/svg/process/ArrowSvg' // Arrow icon component for visual flow between steps
import CopyEmail from '~/components/ui-action/CopyEmail' // Component to display and copy the email address
import { processData } from '~/constants' // Work process data imported from constants

// Process Component - Responsible for rendering the entire work process section
const Process = () => {
  return (
    // Main section for the process with top margin and padding adjustments for responsiveness
    <section className="mt-[80px] md:px-0 px-2">
      {/* Section Heading */}
      <SectionHeading
        title="Here Is How We Proceed" // Main title of the section
        sectionName="Process" // Section identifier name
        titleClass="lg:max-w-[299px] max-w-[185px]" // Responsive title width
      />

      {/* Process Section */}
      <div className="flex md:flex-row flex-col max-w-[1024px] mx-auto justify-center lg:mt-[80px] mt-[60px]">
        {/* First Row - Mapping the first three process steps */}
        <div className="flex md:justify-normal justify-between">
          {processData.slice(0, 3).map((process, index) => (
            <div className="flex relative items-center" key={index}>
              {/* Render Process Card with dynamic props */}
              <ProcessCard {...process} />

              {/* Arrow Icon for Mobile View (between cards) */}
              <div
                className={`transform flex md:hidden lg:-translate-y-2 translate-y-3 ${index === 1 && 'translate-x-5'}`}
              >
                {/* Display the arrow only if it's not the last card in the row */}
                {2 !== index && <ArrowSvg />}
              </div>

              {/* Arrow Icon for Desktop View (absolute positioning between cards) */}
              <div
                className={`transform md:flex md:absolute -right-3 hidden ${index === 0 && '-translate-x-3'} lg:-translate-y-2 translate-y-3`}
              >
                <ArrowSvg />
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - Mapping the remaining two process steps */}
        <div className="flex md:justify-normal justify-center">
          {processData.slice(3, 5).map((process, index) => (
            <div className="flex items-center" key={index}>
              {/* Conditional Arrow Icon for Mobile View (first card only) */}
              <div className="transform md:hidden flex lg:-translate-y-2 translate-y-3">
                {0 === index && <ArrowSvg />}
              </div>

              {/* Render Process Card with dynamic props */}
              <ProcessCard {...process} />

              {/* Conditional Arrow Icon (only if not the last card) */}
              <div className="transform lg:-translate-y-2 translate-y-3">
                {1 !== index && <ArrowSvg />}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Email Copy Section - Displays an email address with a copy button */}
      <div className="flex justify-center lg:mt-[80px] mt-[60px]">
        <CopyEmail />
      </div>
    </section>
  )
}

export default Process
