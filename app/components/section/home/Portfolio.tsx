import { nanoid } from 'nanoid'
import ClientWorkCard from '~/components/card/ClientWorkCard'
import SectionHeading from '~/components/shared/SectionHeading'
import { Marquee } from '~/components/ui/marquee'
import { clientsWorkImages } from '~/ContentData'

const Portfolio = () => {
  return (
    <section className="lg:pt-[100px] pt-[90px] pb-[60px]">
      <div id="works">
        <SectionHeading
          title="Works I did for my clients"
          sectionName="Portfolio"
          titleClass="lg:max-w-[349px] md:max-w-[216px] max-w-[180px]"
        />
      </div>
      <div className="lg:mt-[80px] mt-[50px]">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {clientsWorkImages.map(imgName => (
              <ClientWorkCard key={nanoid()} imgName={imgName} />
            ))}
          </Marquee>
          <Marquee
            reverse
            pauseOnHover
            className="[--duration:20s] lg:mt-[60px] mt-1"
          >
            {clientsWorkImages.map(imgName => (
              <ClientWorkCard key={nanoid()} imgName={imgName} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background lg:flex hidden"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background lg:flex hidden"></div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
