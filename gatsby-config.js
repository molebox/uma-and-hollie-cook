let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development" || "production"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
    siteMetadata: {
        siteName: 'Baka med Uma och Hollie!',
        siteUrl: 'https://umaholliecooks.netlify.com',
      },
    plugins: [
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
              fonts: [
                'Comic Neue\:300,400,400i,700',
                'Open Sans\:300,400,400i,700',
                'source sans pro\:300,400,400i,700' 
              ]
            }
        },
        {
          resolve: 'gatsby-plugin-react-svg',
          options: {
              rule: {
                include: /assets/
              }
          }
        },
          {
              resolve: 'gatsby-plugin-layout',
              options: {
                component: require.resolve('./src/layouts/index.js'),
              },
          },
          {
            resolve: 'gatsby-theme-seo', 
            options: {
                title: 'Uma And Hollie Cooks!',
                description: 'Vlog for Uma and Hollie',
                author: 'Richard Haines',
                siteUrl: 'https://umaholliecooks.netlify.com',
                social: {
                    twitter: 'studio_hungry'
                }
            }
        },
        {
          resolve: 'gatsby-source-sanity',
          options: {
            projectId: 'mjxk8iyh',
            dataset: 'recept',
            watchMode: false
            // a token with read permissions is required
            // if you have a private dataset
            // token: process.env.MY_SANITY_TOKEN
          }
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-theme-ui'
    ]
}