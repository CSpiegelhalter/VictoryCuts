import { Fragment } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic'

function ContactPage() {
  const ContactForm = dynamic(() => import("../components/contact/contact-form"));
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name='Contact company' content='Send messages to our company. This is how you contact us, through email or phone. Conact us for a quote!' />
      </Head>
      <ContactForm />
    </Fragment>
  );
}

export default ContactPage;
