import { Link, useLocation, useNavigate } from "@remix-run/react";
import DiscordSvg from "../svg/footer/DiscordSvg";
import FooterLogo from "../svg/footer/FooterLogo";
import InstagramSvg from "../svg/footer/InstagramSvg";
import PinterestSvg from "../svg/footer/PinterestSvg";
import TwiteerSvg from "../svg/footer/TwiteerSvg";
import { ScrollToSection } from "../ui-action/ScrollToSection";



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
                <a href="https://x.com/ThumbnailBoss" target="_blank" rel="noopener noreferrer">
                    <TwiteerSvg />
                </a>
                <a href="https://www.pinterest.com/thumbnail_boss" target="_blank" rel="noopener noreferrer">
                    <PinterestSvg />
                </a>
                <a href="https://www.instagram.com/thethumbnailboss" target="_blank" rel="noopener noreferrer">
                    <InstagramSvg />
                </a>
                <a href="https://discord.com/invite/HRRA4YhE" target="_blank" rel="noopener noreferrer">
                    <DiscordSvg />
                </a>
            </div>

            {/* copyright text */}
            <p className="font-gabarito text-primary-text text-sm opacity-50 pb-[30px]">All rights reserved by Thumbnail Boss</p>
        </footer>
    );
};

export default Footer;


// this is button class 
const buttonClass = 'font-bricolage font-medium text-sm text-secondary-text'