import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/common/seo";
import { Session } from "../components/pageLayout/Session";
import { toPlainText } from "../utils/common";
import { trimLongString } from "../utils/common";

export const query = graphql`
  query sessionTemplateQuery($id: String!) {
    session: sanitySession(id: { eq: $id }) {
      id
      startDate
      mainImage {
        asset {
          id
          gatsbyImageData(layout: FULL_WIDTH)
          url
        }
      }
      title
      slug {
        current
      }
      _rawDescription
      description {
        _type
        _key
        children {
          _key
          _type
          marks
          text
        }
      }
      artworks {
        ... on SanityImageItem {
          alt
          caption
          asset {
            gatsbyImageData
          }
        }
        ... on SanityVideoItem {
          url
          caption
        }
      }
      links {
        title
        url
      }
      location {
        lat
        lng
      }
      downloads {
        title
        description
        asset {
          url
        }
      }
      relatedArtworks {
        artwork {
          mainImage {
            asset {
              id
              gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 1.5)
            }
          }
          title
          shortTitle
          slug {
            current
          }
        }
      }
      relatedSession {
        session {
          title
          slug {
            current
          }
        }
      }
    }
  }
`;

const SessionTemplate = ({ data }) => {
  const session = data.session;

  const seoDescription = session.description
    ? trimLongString(toPlainText(session.description), 300)
    : "";
  // console.group("!!!!", seoDescription);
  const seoImage = session.mainImage?.asset?.url;

  return (
    <>
      <Seo
        title={session.title}
        image={seoImage}
        description={seoDescription}
      />
      <Session session={session} />
    </>
  );
};

export default SessionTemplate;
