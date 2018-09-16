var styleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  plugins: [ '~/plugins/eventBus.js', '~/plugins/fontawesome.js' ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'Alistair Shepherd - Freelance Frontend Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Portfolio and introduction to Scottish Frontend Web Developer Alistair Shepherd' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Exo:300,400,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Vollkorn' }
    ]
  },
  /*
  ** Fallback file (aka 404)
  */
  generate: {
    fallback: true,
    minify: {
      collapseWhitespace: false
    }
  },
  /*
  ** General global css
  */
  css: ['@/assets/main.scss'/*, 'node_modules/simplebar/dist/simplebar.css'*/],
  /*
  ** Custom loading component
  */
  loading: '~/components/Loading.vue',
  /**
   ** Manifest
   */
  manifest: {
    name: 'Alistair Shepherd - Freelance Frontend Developer',
    short_name: 'Alistair Shepherd',
    lang: 'en',
    theme_color: '#3B8070',
    background_color: '#f6f6f6',
    description: 'Portfolio and introduction to Scottish Frontend Web Developer Alistair Shepherd',
    display: 'standalone'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    plugins: [
      new styleLintPlugin({
        configFile: '.stylelintrc.js',
        files: ['**/*.scss', '**/*.sass', '**/*.vue'],
        failOnError: false,
        quiet: false,
      })
    ]
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa'
  ]
}
