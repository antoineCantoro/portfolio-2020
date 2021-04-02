
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },

      { property: "og:locale", content: "fr_FR" },
      { property: "og:type", content: "website" },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@300;400&display=swap' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/fonts.css',
    '~/static/css/main.css',
    //'~assets/css/locomotive-scroll.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    //{ src: '~/plugins/locomotivescroll.js', mode: 'client' },
    //{ src: '~/plugins/smoothscroller.js', mode: 'client' },
    { src: '~plugins/appear', ssr: false},
    { src: '~plugins/transitions', ssr: false},
    //{ src: '~plugins/smoothscroll', ssr: false}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    extractCSS: true
  }
}
