import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/common/seo";
import { ContactPage } from "../components/pageLayout/ContactPage";

const Contact = () => {
  return (
    <>
      <Seo title="Contact" />
      <ContactPage />
    </>
  );
};

export default Contact;
