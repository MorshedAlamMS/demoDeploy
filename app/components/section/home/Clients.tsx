import ClientCard from "~/components/card/ClientCard";
import { Marquee } from "~/components/ui/marquee";
import { clients } from "~/constants";


const Clients = () => {
  return (
    <section>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {clients.map((client, index) => (
            <ClientCard key={index} {...client} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  );
};

export default Clients;