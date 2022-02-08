module.exports = {
  siteMetadata: {
    siteUrl: "https://assemblage.gmdlcc.com",
    title: "Assemblage",
    author: "Alistair McClymont",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "e7dur9ee",
        dataset: "production",
        watchMode: true,
        overlayDrafts: true,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        additionalData: '@import "utilities";',
        sassOptions: {
          includePaths: ["./src/styles"],
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Assemblage`,
        short_name: `Assemblage, a lab projet for Graphic Media Design, LCC, UAL`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
    "gatsby-plugin-loadable-components-ssr",
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        mergeSecurityHeaders: false,
        allPageHeaders: [
          "X-Frame-Options: DENY",
          "X-XSS-Protection: 1; mode=block",
          "X-Content-Type-Options: nosniff",
          "Referrer-Policy: strict-origin-when-cross-origin",
        ],
      },
    },
  ],
};
