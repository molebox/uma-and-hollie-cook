module.exports = {
    siteMetadata: {},
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
                'Montserrat\:300,400,400i,700',
                'Open Sans\:300,400,400i,700',
                'source sans pro\:300,400,400i,700' 
              ]
            }
        },
        // {
        //   resolve: 'gatsby-plugin-react-svg',
        //   options: {
        //       rule: {
        //         include: /assets/
        //       }
        //   }
        // },
          {
              resolve: 'gatsby-plugin-layout',
              options: {
                component: require.resolve('./src/layouts/index.js'),
              },
          },
        'gatsby-plugin-theme-ui'
    ]
}