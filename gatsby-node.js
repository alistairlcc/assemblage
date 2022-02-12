// ARTWORK PAGES
async function createArtworkPages(graphql, actions, reporter) {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityArtwork(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }
  const artworkEdges = (result.data.allSanityArtwork || {}).edges || [];

  // filter out future nodes - add the filter before forEach and the const below too at the top.
  // needs this at the top: const {isFuture} = require('date-fns')
  // .filter((edge) => !isFuture(edge.node.publishedAt))
  artworkEdges.forEach((edge) => {
    const id = edge.node.id;
    const slug = edge.node.slug.current;
    const path = `/artwork/${slug}/`;

    reporter.info(`Creating artwork page: ${path}`);

    createPage({
      path,
      component: require.resolve("./src/templates/artwork.js"),
      context: { id },
    });
  });
}

// BIOGRAPHY PAGES
async function createBiographyPages(graphql, actions, reporter) {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanitySession(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }
  const biographyEdges = (result.data.allSanitySession || {}).edges || [];

  // filter out future nodes - add the filter before forEach and the const below too at the top.
  // needs this at the top: const {isFuture} = require('date-fns')
  // .filter((edge) => !isFuture(edge.node.publishedAt))
  biographyEdges.forEach((edge) => {
    const id = edge.node.id;
    const slug = edge.node.slug.current;
    const path = `${slug}/`;

    reporter.info(`Creating session page: ${path}`);

    createPage({
      path,
      component: require.resolve("./src/templates/session.js"),
      context: { id },
    });
  });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createArtworkPages(graphql, actions, reporter);
  await createBiographyPages(graphql, actions, reporter);
};

// to get mapbox to build
// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === "build-html") {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /mapbox-gl/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     });
//   }
// };
