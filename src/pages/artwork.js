import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/common/seo";
import { ArtworksPage } from "../components/pageLayout/ArtworksPage";

export const artworks = graphql`
  query ArtworkPageQuery {
    artworks: allSanityArtwork(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          mainImage {
            asset {
              id
              gatsbyImageData(
                layout: FULL_WIDTH
                aspectRatio: 1.5
                placeholder: BLURRED
              )
            }
          }
          title
          shortTitle
          slug {
            current
          }
        }
      }
    }
  }
`;

const Artworks = ({ data }) => {
  const { artworks } = data;
  return (
    <>
      <Seo title="Artwork" />
      <ArtworksPage artworks={artworks.edges} />
    </>
  );
};

export default Artworks;
