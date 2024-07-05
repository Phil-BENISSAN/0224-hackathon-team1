import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    emailjs
      .sendForm("service_io4oedi", "template_l65gwzc", form.current, {
        publicKey: "MtI98CoiCxOfkNtjo",
      })
      .then((error) => {
        console.error(error.text);
      });
    e.target.reset();
  };

  return (
    <main
      className="flex flex-col gap-4 py-4 translate-y-[-2rem] rounded-t-3xl z-[1000] md:py-8 md:gap-6 lg:gap-8 
    bg-whiteColor md:rounded-t-[40px] md:translate-y-[-3rem] lg:py-8 lg:rounded-t-[55px] h-full w-full"
    >
      <h1 className="flex justify-center my-5">Contact</h1>
      <section></section>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col m-auto mb-2 gap-2 p-4 bg-primaryLight rounded-lg max-w-3xl md:p-6 lg:px-8 xl:px-9"
      >
        <label htmlFor="name">Nom</label>
        <input
          placeholder="Insérez votre nom ici"
          className="rounded-lg min-h-12 p-2 mb-2 lg:min-h-14"
          type="text"
          id="name"
          name="user_name"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          placeholder="Insérez votre email ici"
          className="w-full rounded-lg min-h-12 p-2 mb-2 lg:min-h-14"
          type="email"
          id="email"
          name="user_email"
          pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          placeholder="Ecrivez votre commentaire..."
          className="w-full rounded-xl p-2 mb-6"
          id="message"
          cols="30"
          rows="10"
          name="message"
          required
        />
        <button
          className="w-full h-10 p-1 text-base mx-auto bg-primaryColor rounded-lg text-whiteColor duration-300 
          hover:text-blackColor hover:bg-whiteColor min-h-12 lg:min-h-14"
          type="submit"
          aria-label="submit"
        >
          Envoyer
        </button>
      </form>
      {isSubmitted && (
        <p className="text-center text-primary-dark mb-2">
          Votre message a été envoyé avec succès !
        </p>
      )}
    </main>
  );
}

export default Contact;
