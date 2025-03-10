import { useFetcher } from "@remix-run/react";
import InputField from "./fields/InputField";
import TextareaField from "./fields/TextareaField";
import { useEffect, useRef } from "react";
import { ErrorSVG } from "../svg/toast/ErrorSVG";
import { SuccessSVG } from "../svg/toast/SuccessSVG";
import toast from "react-hot-toast";

export default function ReachUsForm() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fetcher: any = useFetcher();
  const isSubmitting = fetcher.state === "submitting";
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (fetcher.data) {
      if (fetcher.data.success) {
        toast.dismiss();
        toast(
          fetcher.data.message || "Your message has been sent successfully!",
          {
            icon: <SuccessSVG />,
            duration: 5000, // Duration in milliseconds (5 seconds)
          }
        );
        // Reset the form fields
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        toast.dismiss();
        toast(
          fetcher.data.message ||
            "There was an error submitting the form. Please try again later.",
          {
            icon: <ErrorSVG />,
            duration: 3000, // Duration in milliseconds (3 seconds)
          }
        );
      }
    }
  }, [fetcher.data]);

  return (
    <fetcher.Form
      method="POST"
      action="/api/reach-us"
      className="space-y-[26px] w-full md:w-[676px] mx-auto"
      ref={formRef}
    >
      <div className="grid grid-cols-2 gap-3 md:gap-4 items-center">
        {/* name input */}
        <InputField label="Full name" type="text" name="name" />

        {/* email input */}
        <div className="hidden lg:block">
          <InputField label="Your email address" type="email" name="email1" />
        </div>

        <div className="block lg:hidden">
          <InputField label="Email address" type="email" name="email2" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 items-center">
        {/* Individual or business input */}
        <InputField
          label="Individual or business?"
          type="text"
          name="individualOrBusiness"
        />

        {/* Your budget input */}
        <InputField label="Your budget" type="text" name="yourBudget" />
      </div>

      {/* Your channel link input */}
      <InputField
        label="Your channel link"
        type="text"
        name="yourChannelLink"
      />

      {/* Message textarea */}
      <TextareaField label="Write your message here" name="message" />

      {/* submit button */}
      <div className="flex justify-center pt-5">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-5 py-3 w-[112px] h-[46px] bg-black/10 rounded-[10px] text-base text-primary-text font-bold font-gabarito leading-6 hover:text-[15px] hover:scale-90 transition-all duration-300 ease-in-out"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </fetcher.Form>
  );
}
