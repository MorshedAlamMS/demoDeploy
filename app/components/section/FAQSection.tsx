import { useState, useRef } from "react";
import { nanoid } from "nanoid";
import SectionHeading from "../shared/SectionHeading";
import { faqData } from "~/constants/faqData";
import PlusSVG from "../svg/faq/PlusSVG";
import MinusSVG from "../svg/faq/MinusSVG";

export default function FAQSection() {
  return (
    <section className="w-full rounded-[30px] bg-secondary-fill pt-[70px] pb-[80px] px-[13px] md:max-w-[702px] lg:max-w-[1024px] mx-auto">
      {/* Section Heading */}
      <SectionHeading
        title="Got any Questions?"
        sectionName="FAQ"
        titleClass="max-w-[283px] mx-auto mb-[80px]"
      />

      {/* FAQ List */}
      <div className="space-y-[10px] w-full md:w-[676px] mx-auto">
        {faqData?.map(
          (faq, index) =>
            faq.question && faq.answer && <FAQItem key={nanoid()} faq={faq} index={index} />
        )}
      </div>
    </section>
  );
}

// Individual FAQ Item
function FAQItem({ faq, index }: { faq: { question: string; answer: string[] }, index: number }) {
  const [isOpen, setIsOpen] = useState(index === 0);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      onClick={toggleFAQ}
      className={`text-base md:text-xl font-bricolage font-medium text-secondary-text leading-[160%] w-full rounded-[20px] py-[22px] md:py-6 px-4 lg:px-5 transition-colors duration-300 ease-in-out ${isOpen ? "bg-white" : "bg-white hover:bg-tertiary-fill"
        }`}
    >
      <summary className="flex items-center justify-between">
        <h3 className="text-primary-text text-left">{faq.question}</h3>

        {/* Toggle Icons */}
        <span className="flex">{isOpen ? <MinusSVG /> : <PlusSVG />}</span>
      </summary>

      {/* Answer with smooth height transition */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          height: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "translateY(0)" : "translateY(-10px)",
        }}
      >
        {/* Divider */}
        <div className="py-[18px]">
          <p className="border-t border-black/5"></p>
        </div>
        <div className="text-left">{faq?.answer?.map((ans) => <p className="py-1" key={nanoid()}>{`\n${ans}`}</p>)}</div>
      </div>
    </button>
  );
}
