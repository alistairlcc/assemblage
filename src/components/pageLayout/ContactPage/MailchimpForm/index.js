// const postUrl = `https://genhybridsystems.us1.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

// action = https://alistairmcclymont.us2.list-manage.com/subscribe/post
// u = f744eb30f4b123f72a680520d
// id = bb3f6d7fddid

import React from "react";
import * as styles from "./MailchimpForm.module.scss";
import MailchimpSubscribe from "react-mailchimp-subscribe";

// a basic form
const CustomForm = ({ status, message, onValidated }) => {
  let email, firstName, lastName, printMessage;

  // if message has a code remove it
  if (message) {
    printMessage = message.startsWith("0 - ") ? message.substring(3) : message;
  }

  const submit = (e) => {
    e.preventDefault();

    email &&
      // firstName &&
      // lastName &&
      // email.value.indexOf("@") > -1 &&
      email.value !== "null" &&
      onValidated({
        EMAIL: email.value,
        // FNAME: firstName.value,
        // LNAME: lastName.value,
      });
  };

  return (
    <div className={styles.mailchimpForm}>
      {status === "sending" && <div>sending...</div>}
      {status === "error" && (
        <div
          className={styles.errorMessage}
          // substring below to trim the number off the error
          dangerouslySetInnerHTML={{ __html: printMessage }}
        />
      )}
      {status === "success" && (
        <div
          className={styles.success}
          dangerouslySetInnerHTML={{ __html: printMessage }}
        />
      )}
      <form>
        <label htmlFor="email" className="visually-hidden">
          Email:
        </label>
        <input
          // style={{ fontSize: "2em", padding: 5 }}
          ref={(node) => (email = node)}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
        {/* <br />
      <input
        // style={{ fontSize: "2em", padding: 5 }}
        ref={(node) => (firstName = node)}
        type="text"
        placeholder="First name"
      />
      <br />
      <input
        // style={{ fontSize: "2em", padding: 5 }}
        ref={(node) => (lastName = node)}
        type="text"
        placeholder="Last name"
      /> */}
        {/* <br /> */}

        <button onClick={submit}>subscribe</button>
      </form>
      {/* <p>
        Emails will be very infrequent, at most a handful per year. This email
        list is to let you know about new exhibitions, or other relevant events
        that might be going on.
      </p> */}
      <p>
        You can easily unsubscribe at the bottom of any email, or just enter
        your email above, click <em>subscribe</em> and you will get a link to
        change your preferences.
      </p>
    </div>
  );
};

const MailchimpForm = () => {
  const url =
    "https://alistairmcclymont.us2.list-manage.com/subscribe/post-json?u=f744eb30f4b123f72a680520d&id=bb3f6d7fdd";
  return (
    <div className={styles.mailchimpWrapper}>
      <h2>Subscribe to my mailing list:</h2>
      {/* <MailchimpSubscribe url={url} /> */}
      <p>
        Emails will be very infrequent, at most a handful per year. This email
        list is to let you know about new exhibitions, or other relevant events
        that might be going on.
      </p>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export { MailchimpForm };
