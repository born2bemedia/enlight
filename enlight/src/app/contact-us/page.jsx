import React from "react";
import "@/public/scss/single-service.scss";
import "@/public/scss/contacts.scss";
import ContactHero from "./_components/ContactHero";
import ContactBlock from "./_components/ContactBlock";

export const metadata = {
  title: "Contact Us | Enlight",
  description:
    "Connect with crypto marketing experts to supercharge the growth of your crypto project.",
};

function ContactsPage() {
  return (
    <>
      <ContactHero />
      <ContactBlock />
    </>
  );
}

export default ContactsPage;
