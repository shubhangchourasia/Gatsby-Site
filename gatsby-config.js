module.exports = {
  siteMetadata: {
    title: "Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DigitalBiz Tect`,
        short_name: `DBT`,
        description: `The DigitalBiz Tech Site.`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#fff`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    "gatsby-plugin-offline",
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/blogs/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogcontent`,
        path: `${__dirname}/src/blogcontent`,
      },
    },
  ],
};
