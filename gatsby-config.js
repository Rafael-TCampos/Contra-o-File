/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `TesteGastby`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Josefin Sans\:100,300,400,500,700`, 
          `Poppins\:200,300,400,500` 
        ],
        display: 'swap'
      }
    },
  ],
}
