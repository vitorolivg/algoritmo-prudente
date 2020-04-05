/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: `Algoritmo Prudente | IT Consulting`,
    description: `Your partnership for product creation. We use technology to impact and transform the users experience.`,
    author: `@vitorolivg`,
    currentYear: 2020,
    siteTitle: `Algoritmo Prudente`,
    keywords: `algoritmo, prudente, porto it, porto consulting, algoritmo prudente, frontend engineering, agile consultant, vitor gomes`,
    url: 'https://www.algoritmoprudente.com/',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/algoritmoprudente.png`,
      },
    },
  ],
};
