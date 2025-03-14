import BehanceSvg from '~/components/svg/socialIcons/BehanceSvg'
import DiscordSvg from '~/components/svg/socialIcons/DiscordSvg'
import DribbbleSvg from '~/components/svg/socialIcons/DribbbleSvg'
import FacebookSvg from '~/components/svg/socialIcons/FacebookSvg'
import InstagramSvg from '~/components/svg/socialIcons/InstagramSvg'
import LinkedInSvg from '~/components/svg/socialIcons/LinkedInSvg'
import PinterestSvg from '~/components/svg/socialIcons/PinterestSvg'
import SnapChatSvg from '~/components/svg/socialIcons/SnapChatSvg'
import TiktokSvg from '~/components/svg/socialIcons/TiktokSvg'
import TwiteerSvg from '~/components/svg/socialIcons/TwiteerSvg'
import WhatsAppSvg from '~/components/svg/socialIcons/WhatsAppSvg'
import YoutubeSvg from '~/components/svg/socialIcons/YoutubeSvg'

/*
 * Social media icons are automatically mapped based on the platform name.
 * Ensure the platform name in `socialLinks` matches the key in `socialIcons`.
 */
export const socialIcons = {
  Twitter: <TwiteerSvg />,
  Pinterest: <PinterestSvg />,
  Instagram: <InstagramSvg />,
  Discord: <DiscordSvg />,
  Facebook: <FacebookSvg />,
  TikTok: <TiktokSvg />,
  YouTube: <YoutubeSvg />,
  WhatsApp: <WhatsAppSvg />,
  LinkedIn: <LinkedInSvg />,
  Snapchat: <SnapChatSvg />,
  Behance: <BehanceSvg />,
  Dribbble: <DribbbleSvg />,
}
