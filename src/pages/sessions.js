import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/common/seo";
import { SessionPage } from "../components/pageLayout/SessionPage";

export const sessionPages = graphql`
  query SessionPagesQuery {
    sessionPages: allSanitySession(
      sort: { fields: [startDate], order: ASC }
      filter: { slug: { current: { ne: null } }, startDate: { ne: null } }
    ) {
      edges {
        node {
          id
          startDate
          mainImage {
            asset {
              id
              gatsbyImageData(
                layout: FULL_WIDTH
                aspectRatio: 1.8
                placeholder: BLURRED
              )
            }
          }
          title
          slug {
            current
          }
          location {
            lat
            lng
          }
        }
      }
    }
  }
`;

const Session = ({ data }) => {
  const { sessionPages } = data;
  return (
    <>
      <Seo title="Sessions" />
      <SessionPage sessionPages={sessionPages.edges} />
    </>
  );
};

export default Session;
