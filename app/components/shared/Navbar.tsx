import { Link, NavLink, useLocation, useNavigate } from "@remix-run/react";
import { Logo } from "../svg/Logo";

// this function is used to scroll to selected section
export const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
        const offset = 100; // Adjust this value as needed
        const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: sectionPosition - offset, behavior: "smooth" });
    }
};


const Navbar = () => {
    const location = useLocation(); // Get the current route
    const navigate = useNavigate(); // To programmatically navigate

    const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (location.pathname === "/") {
            e.preventDefault();
            scrollToSection("contact");
        } else {
            navigate("/contact");
        }
    };

    return (
        <nav className="lg:max-w-[850px] bg-white rounded-[10px] md:max-w-[768px] w-full mx-auto lg:p-3 md:px-[33px] px-[13px] py-5 flex items-center justify-between lg:mt-5 sticky md:top-5 top-0 z-[1000]">
            <Link to="/">
                <Logo />
            </Link>
            <div className="lg:max-w-[277px] max-w-[241px] p-[3px] rounded-[14px] bg-[#F2F2E9] h-10 flex items-center gap-1">
                <NavLink to="/portfolio" className={({isActive}) => isActive ? `bg-white ${buttonClass}` :`${buttonClass}`}>Portfolio</NavLink>
                <NavLink to="/blogs" className={({isActive}) => isActive ? `bg-white ${buttonClass}` :`${buttonClass}`}>Blogs</NavLink>
                <NavLink to="/contact" onClick={handleContactClick} className={({isActive}) => isActive ? `bg-white ${buttonClass}` :`${buttonClass}`}>Contact</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;


// this is button class 
const buttonClass = 'lg:px-[14px] px-2 flex items-center justify-center rounded-xl text-primary-text text-sm font-bricolage hover:bg-[#0000001A] transition-colors duration-500 ease-in-out h-full'