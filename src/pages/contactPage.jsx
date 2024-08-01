import React from "react";
import ContactForm from "../components/contact/Form";

const ContactPage = () => {
  return (
    <section id="contact" className="max-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className="text-center text-gray-700">Send us a message</h2>
      <p className="text-center text-gray-700 py-2">We're standing by!</p>

      {/* image */}
      <div className="grid md:grid-cols-2">
        <img
          src="public/images/contact-img.jpg"
          alt="/"
          className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px] rounded-md"
        />

        {/* form section */}
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;
