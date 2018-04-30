module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,600`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "<your-tracking-id-here>",
        head: true
      }
    },
  ],
  siteMetadata: {
    title: 'A.J. Kueterman',
    description: 'Mobile apps and static sites.',
    keywords: 'mobile apps, static site, portfolio, personal website',
    url: 'https://www.ajkueterman.com'
  }
};
