import { Link, useLocation, useNavigate } from "@remix-run/react";
import DiscordSvg from "../svg/socialIcons/DiscordSvg";
import FooterLogo from "../svg/socialIcons/FooterLogo";
import InstagramSvg from "../svg/socialIcons/InstagramSvg";
import PinterestSvg from "../svg/socialIcons/PinterestSvg";
import TwiteerSvg from "../svg/socialIcons/TwiteerSvg";
import { ScrollToSection } from "../ui-action/ScrollToSection";
import { socialLinks } from "~/ContentData";
import { socialIcons } from "~/constants/SocialIcons";



const Footer = () => {
    const pathName = useLocation().pathname
    const navigate = useNavigate()
    const handleContactSection = () => {
        if (pathName === '/') {
            ScrollToSection('contact')
        }
        if (pathName !== '/') {
            navigate('/contact')
        }
    }
    return (
        <footer className="lg:max-w-[1024px] md:max-w-[768px] mt-[100px] w-full mx-auto lg:space-y-10 space-y-[30px] flex flex-col items-center justify-center">
            {/* logo */}
            <FooterLogo />
            {/* route */}
            <div className="flex items-center lg:gap-[50px] gap-[30px]">
                <button onClick={handleContactSection} className={buttonClass}>Home</button>
                <button onClick={handleContactSection} className={buttonClass}>Portfolio</button>
                <button onClick={handleContactSection} className={buttonClass}>About me</button>
                <button onClick={handleContactSection} className={buttonClass}>Contact</button>
            </div>
            {/* Social liks */}
            <div className="flex items-center gap-[18px]">
                {socialLinks.map((social, index) => (
                    <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                        {socialIcons[social.name]}
                    </a>
                ))}
            </div>

            {/* copyright text */}
            <p className="font-gabarito text-primary-text text-sm opacity-50 pb-[30px]">All rights reserved by Thumbnail Boss</p>
        </footer>
    );
};

export default Footer;


// this is button class 
const buttonClass = 'font-bricolage font-medium text-sm text-secondary-text'