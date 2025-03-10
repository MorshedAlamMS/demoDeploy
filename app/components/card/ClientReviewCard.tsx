import { IClientReview } from "~/types";

const ClientReviewCard = ({clientImage,name,subs,review}:IClientReview) => {
    return (
        <div className="py-4 px-5 bg-white m-2 rounded-[20px] shadow-custom-soft lg:max-w-[321px] md:max-w-[336px] max-w-full">
            <div className="flex items-center gap-x-2">
                <div>
                    <img src={clientImage} width={32} height={32} className="rounded-full" alt="Avatar"/>
                </div>
                <div>
                    <p className="text-primary-text text-base font-semibold leading-[160%] font-bricolage">{name}</p>
                    <p className="text-quaternary-text text-sm font-semibold leading-[160%] font-bricolage">{subs}</p>
                </div>
            </div>
            <div className="mt-[14px]">
                <p className="text-primary-text text-base font-medium leading-[160%] font-bricolage">{review}</p>
            </div>
        </div>
    );
};

export default ClientReviewCard;