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
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#00aba9' },
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
    author: 'Alistair Shepherd',
    name: 'Alistair Shepherd - Freelance Frontend Developer',
    short_name: 'A Shepherd',
    lang: 'en',
    theme_color: '#0f1514',
    background_color: '#0f1514',
    description: 'Portfolio and introduction to Scottish Frontend Web Developer Alistair Shepherd',
    display: 'standalone',
    nativeUI: true,
    ogHost: 'https://alistairshepherd.co.uk',
    ogImage: '/open-graph.png'
  },
  /**
   ** Sitemap
   */
  sitemap: {
    hostname: 'https://alistairshepherd.co.uk',
    generate: true
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
      config.module.rules.forEach((rule) => {
        if (rule.test.toString() === '/\\.(png|jpe?g|gif|svg)$/'){
          rule.use = [
            {
              loader: 'url-loader',
              options: {
                limit: 2000, //change url-loader limit to 2kB
                name: 'img/[name].[hash:7].[ext]'
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 65
                },
                optipng: {
                  enabled: false,
                },
                pngquant: {
                  quality: '65-90',
                  speed: 1,
                  verbose: true
                }
              }
            }
          ];
          delete rule.loader;
          delete rule.options;
        }
      })
    },
    plugins: [
      new styleLintPlugin({
        configFile: '.stylelintrc.js',
        files: ['**/*.scss', '**/*.sass', '**/*.vue'],
        failOnError: false,
        quiet: false,
      })
    ],
    vueLoader: {
      transformAssetUrls: {
        video: 'poster',
        source: 'src'
      }
    }
  },
  vendor: ['image-webpack-loader'],
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap'
  ]
}
