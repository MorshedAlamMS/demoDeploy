
import { nanoid } from "nanoid";
import FooterLogo from "../svg/socialIcons/FooterLogo";
import { ScrollToSection } from "../ui-action/ScrollToSection";
import { socialLinks } from "~/ContentData";
import { socialIcons } from "~/constants/SocialIcons";



const Footer = () => {
    return (
        <footer className="lg:max-w-[1024px] md:max-w-[768px] mt-[100px] w-full mx-auto lg:space-y-10 space-y-[30px] flex flex-col items-center justify-center">
            {/* logo */}
            <FooterLogo />
            {/* route */}
            <div className="flex items-center lg:gap-[50px] gap-[30px]">
                <button onClick={() => ScrollToSection('home')} className={buttonClass}>Home</button>
                <button onClick={() => ScrollToSection('works')} className={buttonClass}>Portfolio</button>
                <button onClick={() => ScrollToSection('about')} className={buttonClass}>About me</button>
                <button onClick={() => ScrollToSection('contact')} className={buttonClass}>Contact</button>
            </div>
            {/* Social liks */}
            <div className="flex items-center gap-[18px]">
                {socialLinks.map((social) => (
                    <a key={nanoid()} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social?.name}>
                        {socialIcons[social?.name as keyof typeof socialIcons] ?? null}
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