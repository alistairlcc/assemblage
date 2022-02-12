import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/common/seo";
import { HomePage } from "../components/pageLayout/HomePage";
import { ArtworksPage } from "../components/pageLayout/ArtworksPage";

export const artworks = graphql`
  query HomeArtworkQuery {
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

const IndexPage = ({ data }) => {
  const { artworks } = data;
  return (
    <>
      <Seo title="Assemblage" />
      <HomePage />
      <ArtworksPage artworks={artworks.edges} />
    </>
  );
};

export default IndexPage;
