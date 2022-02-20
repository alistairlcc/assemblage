import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/common/seo";
import { HomePage } from "../components/pageLayout/HomePage";

export const artworks = graphql`
  query HomeArtworkQuery {
    artwork: allSanitySession(
      filter: { slug: { current: { eq: "assemblage" } } }
    ) {
      edges {
        node {
          title
          slug {
            current
          }
          relatedArtworks {
            artwork {
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
    }
  }
`;

const IndexPage = ({ data }) => {
  const { artwork } = data;
  const artworks = artwork.edges[0].node.relatedArtworks.map(
    (item) => item.artwork
  );
  console.log(artworks);
  return (
    <>
      <Seo title="Assemblage" />
      <HomePage artworks={artworks} />
    </>
  );
};

export default IndexPage;
