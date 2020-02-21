// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))


module.exports = {
  siteName: 'Hafta9',
  templates: {
    blogPost: '/blog/:id',
    googleSheet: '/sheet/:id'
    // googleSheet: '/'
  },
  plugins: [
    {
      use: 'gridsome-source-google-sheets',
      options: {
        sheetId: '1ydBsziaGyR-YfbA2c0xsobT0s9g0vo1gctP1IucUaC0',
        apiKey: 'AIzaSyB-2Awx0uzYktg-zMRbYmCBzT7beR6qxKE',
        // route: '/e/:web_scraper_order'
        // type: 'TYPE_NAME', //Optional - default is googleSheet. Used for graphql queries.
      }
    },
    {
      use: '@gridsome/source-faker',
      options: {
        numNodes: 50
      }
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
}

