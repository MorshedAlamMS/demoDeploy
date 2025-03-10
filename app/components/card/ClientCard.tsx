const ClientCard = ({
  img,
  name,
  subscribes,
}: {
  img: string;
  name: string;
  subscribes: string;
}) => {
  return (
    <div className="lg:w-[200px] w-[100px] h-[122px] lg:h-[232px] flex flex-col items-center lg:mx-4 mx-1 lg:gap-[14px] gap-[6px] border-2 border-[rgba(0,0,0,0.10)] lg:rounded-[10px] rounded-md  bg-white lg:px-[14px] px-[7px] pt-[7px] pb-[6px] lg:pt-[14px] lg:pb-3">
      <img className="rounded-full lg:flex hidden" height={140} width={140} alt="Client" src={img} />
      <img className="rounded-full lg:hidden flex" height={70} width={70} alt="Client" src={img} />
      <div className="flex flex-col items-center">
        <figcaption className="font-bricolage font-semibold leading-[160%] text-primary-text text-xs lg:text-xl">
          {name}
        </figcaption>
        <p className="lg:text-base text-[10px] font-semibold text-quaternary-text leading-[160%] font-bricolage">{subscribes}</p>
      </div>
    </div>
  );
};
export default ClientCard;