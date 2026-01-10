import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "./Input";
import Modal from "../UI/Modal";
import CheckIcon from "../../assets/check.svg?react";
import ErrorIcon from "../../assets/error.svg?react";
import FormActions from "./FormActions";
import { emailRegex } from "../../constants";

export default function Form() {
  const [isSent, setIsSent] = useState<"" | "success" | "error">("");
  const [clicked, setClicked] = useState(false);
  const [isInvalidMessage, setIsInvalidMessage] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setClicked(true);
    setIsInvalidMessage(false);
    setIsInvalidEmail(false);

    const formElement = form.current!;
    const formData = new FormData(formElement);
    const email = (formData.get("email") as string) || "";
    const message = (formData.get("message") as string) || "";

    if (!message.trim().length || !emailRegex.test(email)) {
      if (!message.trim().length) setIsInvalidMessage(true);
      if (!emailRegex.test(email)) setIsInvalidEmail(true);
      setClicked(false);
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formElement,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => setIsSent("success"))
      .catch((error) => {
        setIsSent("error");
        console.error("FAILED...", error);
      })
      .finally(() => setClicked(false));
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="relative flex w-full flex-col gap-5"
    >
      <Input type="text" placeholder="Name" name="name" />
      <Input
        type="email"
        placeholder="Email"
        name="email"
        invalid={isInvalidEmail}
      />
      <Input type="text" placeholder="Subject" name="title" />
      <textarea
        className={`border-primary-black w-full rounded border-2 px-6 py-4 text-base/[125%] tracking-tight focus:text-zinc-800 ${
          isInvalidMessage
            ? "border-red-700 text-red-700 placeholder:text-red-700"
            : "border-primary-black text-zinc-800 placeholder:text-zinc-400"
        } transition-all duration-300`}
        id="message"
        name="message"
        placeholder="Write your message"
        rows={5}
        required
      ></textarea>
      <FormActions clicked={clicked} />
      <Modal open={isSent} onClose={() => setIsSent("")}>
        <div className="flex flex-col items-center gap-4 p-4">
          {isSent === "success" && (
            <>
              <CheckIcon className="h-20 w-20" />
              <p>Your message was sent successfully!</p>
            </>
          )}
          {isSent === "error" && (
            <>
              <ErrorIcon className="h-20 w-20" />
              <p>Oops! Something went wrong. Please try again.</p>
            </>
          )}
        </div>
      </Modal>
    </form>
  );
}
