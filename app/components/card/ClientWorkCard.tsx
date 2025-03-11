const ClientWorkCard = ({ imgName }: { imgName: string }) => {
  return (
    <div className="lg:w-[328px] w-[168px]">
      <img
        width={328}
        height={185}
        className="lg:flex w-full hidden rounded-xl border-[rgba(0,0,0,0.20)] border-2"
        alt="Thumbnail"
        src={`/MyWorksImages/${imgName}`}
      />
      <img
        width={168}
        height={94}
        className="lg:hidden w-full rounded-xl border-[rgba(0,0,0,0.20)] border-2"
        alt="Thumbnail"
        src={`/MyWorksImages/${imgName}`}
      />
    </div>
  );
};

export default ClientWorkCard;
