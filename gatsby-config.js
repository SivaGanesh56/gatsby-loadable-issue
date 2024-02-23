/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `my-gatsby-site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [`gatsby-plugin-image`, `gatsby-plugin-loadable-components-ssr`],
};
