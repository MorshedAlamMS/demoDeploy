import DiscordSvg from "~/components/svg/socialIcons/DiscordSvg";
import InstagramSvg from "~/components/svg/socialIcons/InstagramSvg";
import PinterestSvg from "~/components/svg/socialIcons/PinterestSvg";
import TwiteerSvg from "~/components/svg/socialIcons/TwiteerSvg";

/*
 * Social media icons are automatically mapped based on the platform name.
 * Ensure the platform name in `socialLinks` matches the key in `socialIcons`.
 */
export const socialIcons = {
    Twitter: <TwiteerSvg />,   // Twitter icon component
    Pinterest: <PinterestSvg />, // Pinterest icon component
    Instagram: <InstagramSvg />, // Instagram icon component
    Discord: <DiscordSvg />,   // Discord icon component
    // Facebook: <FacebookSvg />, // Facebook icon component
    // TikTok: <TikTokSvg />,     // TikTok icon component
    // YouTube: <YouTubeSvg />,   // YouTube icon component
};