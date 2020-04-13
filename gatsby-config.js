require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        siteName: 'Baka med Uma och Hollie!',
        siteUrl: 'https://umaholliecooks.netlify.com',
      },
    plugins: [
        // {
        //     resolve: 'gatsby-source-filesystem',
        //     options: {
        //       path: `${__dirname}/posts/`,
        //       name: 'posts',
        //     },
        //   },
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
        'gatsby-plugin-theme-ui'
    ]
}