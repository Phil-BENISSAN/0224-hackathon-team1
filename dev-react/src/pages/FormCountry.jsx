function Contact() {
  return (
    <main className="p-6">
      <h1 className="flex justify-center my-5">
        Trouver le pays qui vous correspond
      </h1>
      <section></section>
      <form
        onSubmit={}
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
          aria-label="evnoyer"
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
