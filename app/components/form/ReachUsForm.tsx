import { useRef, useState } from "react";
import toast from "react-hot-toast";
import InputField from "./fields/InputField";
import TextareaField from "./fields/TextareaField";
import { ErrorSVG } from "../svg/toast/ErrorSVG";
import { SuccessSVG } from "../svg/toast/SuccessSVG";
import { myEmail } from "~/ContentData";

export default function ReachUsForm() {
  const formRef = useRef<HTMLFormElement>(null);
  
  // Store form data in state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    individualOrBusiness: "",
    yourBudget: "",
    yourChannelLink: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    const { name, email, individualOrBusiness, yourBudget, yourChannelLink, message } = formData;

    if (!name || !email || !message) {
      toast.error("Please fill in all fields.", { icon: <ErrorSVG /> });
      return;
    }
    toast.success("Redirecting to Gmail...", { icon: <SuccessSVG /> });

    // Email setup
    const recipientEmail = myEmail; // Change this to the recipient's email
    const subject = "Project Handover";
    const body = `Hi ${name},%0A%0A` +
      `🔹 Individual or Business: ${individualOrBusiness}%0A` +
      `🔹 Budget: ${yourBudget}%0A` +
      `🔹 Channel Link: ${yourChannelLink}%0A%0A` +
      `💬 Message: ${message}%0A%0A` +
      `Best regards,%0A${name}%0A${email}`;

    // Open Gmail with pre-filled details
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${encodeURIComponent(subject)}&body=${body}`);


    // Reset form
    if (formRef.current) formRef.current.reset();
    setFormData({
      name: "",
      email: "",
      individualOrBusiness: "",
      yourBudget: "",
      yourChannelLink: "",
      message: "",
    });
  };

  return (
    <form 
      className="space-y-[26px] w-full md:w-[676px] mx-auto" 
      ref={formRef} 
      onSubmit={handleSubmit}
    >
      {/* Form Fields */}
      <div className="grid grid-cols-2 gap-3 md:gap-4 items-center">
        <InputField label="Full name" type="text" name="name" value={formData.name} onChange={handleChange} />
        <InputField label="Your email address" type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 items-center">
        <InputField label="Individual or business?" type="text" name="individualOrBusiness" value={formData.individualOrBusiness} onChange={handleChange} />
        <InputField label="Your budget" type="text" name="yourBudget" value={formData.yourBudget} onChange={handleChange} />
      </div>

      <InputField label="Your channel link" type="text" name="yourChannelLink" value={formData.yourChannelLink} onChange={handleChange} />
      <TextareaField label="Write your message here" name="message" value={formData.message} onChange={handleChange} />

      {/* Submit Button */}
      <div className="flex justify-center pt-5">
        <button
          type="submit"
          className="px-5 py-3 w-[112px] h-[46px] bg-black/10 rounded-[10px] text-base text-primary-text font-bold font-gabarito leading-6 hover:text-[15px] hover:scale-90 transition-all duration-300 ease-in-out"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
