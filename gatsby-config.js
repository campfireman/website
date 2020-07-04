require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteTitleAlt: `ture.dev | Ture Claußen`,
    // Used for the title template on pages other than the index site
    siteTitle: `ture.dev`,
    // Default title of the page
    siteHeadline: `ture.dev | Ture Claußen`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://ture.dev`,
    // Used for SEO
    siteDescription: `This is Ture's website`,
    // Will be set on the <html /> tag
    siteLanguage: `de`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@lekoarts_de`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Gitlab`,
            url: `https://gitlab.com/CampFireMan`,
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ture Claußen`,
        short_name: `minimal-blog`,
        description: `Das ist meine Website`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
