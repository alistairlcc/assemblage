import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/common/seo";
import { HomePage } from "../components/pageLayout/HomePage";

const IndexPage = ({ data }) => {
  const exhibitions = [...data.solo.edges, ...data.group.edges];

  return (
    <>
      <Seo title="Assemblage" />
      <HomePage />
    </>
  );
};

export default IndexPage;
