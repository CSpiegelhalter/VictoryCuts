import { Fragment } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic'

function ContactPage() {
  const ContactForm = dynamic(() => import("../components/contact/contact-form"));
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name='description' content='Send me your messages!' />
      </Head>
      <ContactForm />
    </Fragment>
  );
}

export default ContactPage;
