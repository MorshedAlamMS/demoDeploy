import { useRef} from "react";
import toast from "react-hot-toast";
import InputField from "./fields/InputField";
import TextareaField from "./fields/TextareaField";
import { ErrorSVG } from "../svg/toast/ErrorSVG";
import { SuccessSVG } from "../svg/toast/SuccessSVG";
import { myEmail } from "~/ContentData";
import { useNavigate} from "@remix-run/react";

export default function ReachUsForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const clearParams = () => {
    navigate("/", { replace: true }); // Navigates to the same route but removes query params
  };

  // Handle form submission
  const handleSubmit = (e: { preventDefault: () => void; }) => {

    e.preventDefault(); // Prevent form from reloading the page

        // Get form data using FormData API
        const formData = new FormData(formRef.current!);

        // Extract values
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const individualOrBusiness = formData.get("individualOrBusiness") as string;
        const yourBudget = formData.get("yourBudget") as string;
        const yourChannelLink = formData.get("yourChannelLink") as string;
        const message = formData.get("message") as string;

    if (!name || !email || !message) {
      toast.error("Please fill in all fields.", { icon: <ErrorSVG /> });
      return;
    }
    toast.success("Redirecting to Gmail...", { icon: <SuccessSVG /> });

    // Email setup
    const recipientEmail = myEmail; // Change this to the recipient's email
    const subject = "Contact Form Submission";
    const body = `Hi,%0A%0A` + 
      `I am ${name},%0A%0A` +
      `🔹 Individual or Business: ${individualOrBusiness}%0A` +
      `🔹 Budget: ${yourBudget}%0A` +
      `🔹 Channel Link: ${yourChannelLink}%0A%0A` +
      `💬 Message: ${message}%0A%0A` +
      `Best regards,%0A${name}%0A${email}`;

    // Open Gmail with pre-filled details
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${encodeURIComponent(subject)}&body=${body}`);

    // Reset form
    formRef.current!.reset();
    clearParams()
  };

  return (
    <form 
      className="space-y-[26px] w-full md:w-[676px] mx-auto" 
      ref={formRef} 
      onSubmit={handleSubmit}
    >
      {/* Form Fields */}
      <div className="grid grid-cols-2 gap-3 md:gap-4 items-center">
        <InputField required={true} label="Full name" type="text" name="name"/>
        <InputField required={true} label="Your email address" type="email" name="email" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 items-center">
        <InputField required={false} label="Individual or business?" type="text" name="individualOrBusiness" />
        <InputField required={false} label="Your budget" type="text" name="yourBudget" />
      </div>

      <InputField required={false} label="Your channel link" type="text" name="yourChannelLink" />
      <TextareaField required={true} label="Write your message here" name="message" />

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
