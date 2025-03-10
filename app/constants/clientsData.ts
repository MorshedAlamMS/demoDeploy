import { clientNames, clientImages, reviewsOfClient } from "~/ContentData";
import { IClientInfo, IClientReview } from "~/types/client";

export const clients: IClientInfo[] = [
  {
    name: "ZHC Crafts",
    subscribes: "7.6M subs",
    img: "/clientMarquee/zhc.png",
  },
  {
    name: "Dhar Mann",
    subscribes: "24.5M subs",
    img: "/clientMarquee/dhar.png",
  },
  {
    name: "TubeBuddy",
    subscribes: "854K subs",
    img: "/clientMarquee/tubeBuddy.png",
  },
  {
    name: "Justin Pugh",
    subscribes: "18.2K subs",
    img: "/clientMarquee/justin.png",
  },
  {
    name: "Jeremy Ethier",
    subscribes: "7.05M subs",
    img: "/clientMarquee/jeremy.png",
  },
  {
    name: "BlueThunder",
    subscribes: "6.02K subs",
    img: "/clientMarquee/blueThunder.png",
  },
  {
    name: "ZHC",
    subscribes: "28.5M subs",
    img: "/clientMarquee/zhc2.png",
  },
  {
    name: "HubSpot ",
    subscribes: "146K subs",
    img: "/clientMarquee/hubSpot.png",
  },
  {
    name: "Kamahley",
    subscribes: "371k subs",
    img: "/clientMarquee/kamahley.png",
  }

];



export const clientsReviews: IClientReview[] = 
reviewsOfClient.map((review,index) => ({
  name: clientNames[index],
  subs: "",
  review: review,
  clientImage: `/ClientReviewImages/${clientImages[index]}`,
}))

export const clientReviewFirstCol : IClientReview[] = clientsReviews.slice(0,4)
export const clientReviewSecondCol = clientsReviews.slice(4,8)
export const clientReviewThirdCol = clientsReviews.slice(8)

export const clientsWork = [
  {
    img: '/marquee/thumbnail1.png',
    alt: 'Thumbnail'
  },
  {
    img: '/marquee/thumbnail2.png',
    alt: 'Thumbnail'
  },
  {
    img: '/marquee/thumbnail3.png',
    alt: 'Thumbnail'
  },
  {
    img: '/marquee/thumbnail4.png',
    alt: 'Thumbnail'
  },
  {
    img: '/marquee/thumbnail5.png',
    alt: 'Thumbnail'
  }
]
