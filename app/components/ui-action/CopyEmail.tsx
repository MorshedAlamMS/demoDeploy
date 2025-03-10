import { useState } from "react";
import CopySvg from "../svg/process/CopySvg";
import { CheckmarkIcon } from "react-hot-toast";

const CopyEmail = () => {
    const [copied, setCopied] = useState(false);
    const handleCopy = async() => {
        try {
            await navigator.clipboard.writeText("hey@thumbnailboss.co");
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    }
    return (
            <button 
            onClick={handleCopy}
            className="flex items-center text-base font-semibold font-bricolage text-secondary-text gap-x-[9px] py-2 px-4 rounded-lg border border-brand-parrot">
            hey@thumbnailboss.co
            {copied ? <CheckmarkIcon/> : <CopySvg/>}
            </button>
    );
};

export default CopyEmail;