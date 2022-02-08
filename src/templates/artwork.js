import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/common/seo";
import { Artwork } from "../components/pageLayout/Artwork";
import { toPlainText } from "../utils/common";
import { trimLongString } from "../utils/common";

export const query = graphql`
  query ArtworkTemplateQuery($id: String!) {
    artwork: sanityArtwork(id: { eq: $id }) {
      id
      title
      shortTitle
      slug {
        current
      }
      publishedAt
      artworkDate
      mainImage {
        asset {
          id
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          url
        }
      }
      material
      dimensions {
        depth
        units
        height
        width
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
    }
  }
`;

const ArtworkTemplate = ({ data }) => {
  const artwork = data.artwork;
  const seoDescription = artwork.description
    ? trimLongString(toPlainText(artwork.description), 300)
    : "";
  const seoImage = artwork.mainImage?.asset?.url;

  return (
    <>
      <Seo
        title={artwork.title}
        image={seoImage}
        description={seoDescription}
      />
      <Artwork artwork={artwork} />
    </>
  );
};

export default ArtworkTemplate;
