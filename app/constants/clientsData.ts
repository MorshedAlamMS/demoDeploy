import { clientNames, clientImages, reviewsOfClient } from '~/ContentData'
import { IClientReview } from '~/types/client'

export const clientsReviews: IClientReview[] = reviewsOfClient.map(
  (review, index) => ({
    name: clientNames[index],
    subs: '',
    review: review,
    clientImage: `/ClientReviewImages/${clientImages[index]}`,
  }),
)

export const clientReviewFirstCol: IClientReview[] = clientsReviews.slice(0, 4)
export const clientReviewSecondCol = clientsReviews.slice(4, 8)
export const clientReviewThirdCol = clientsReviews.slice(8)
