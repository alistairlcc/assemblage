import React, { useState } from "react";
import { Link } from "gatsby";
import Obfuscate from "react-obfuscate";
import * as styles from "./Contact.module.scss";
import { MailchimpForm } from "./MailchimpForm";

const ContactPage = () => {
  return (
    <>
      <div className={styles.contact}>
        <h1 className="visually-hidden">Contact</h1>
        <section>
          <h2>Please get in touch at the email below:</h2>
          <p>
            <Obfuscate email="mail@alistairmcclymont.com" />
          </p>
          <h2>Find me on social media:</h2>
          <p>
            <a
              href="https://www.instagram.com/alistairmcclymont/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram: @alistairmcclymont
            </a>
            <br />
            <a
              href="https://twitter.com/mcclymont/"
              target="_blank"
              rel="noreferrer"
            >
              Twitter: @mcclymont
            </a>
          </p>
        </section>
        <section>
          <MailchimpForm />
        </section>
      </div>
    </>
  );
};

export { ContactPage };
