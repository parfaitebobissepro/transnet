export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'transnet',
    // __dangerouslyDisableSanitizers: ['script'],
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href: "http://fonts.googleapis.com/css?family=Raleway:400,500,600,700,800",
        rel: "stylesheet",
        type: "text/css"
      },
      {
        href: "http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,700italic,400,800,700,600",
        rel: "stylesheet",
        type: "text/css"
      },
      {
        rel: "stylesheet",
        href: "/icon-fonts/font-awesome-4.3.0/css/font-awesome.min.css"
      },
      // {
      //   rel: "stylesheet",
      //   href: "/assets/css/styleswitcher.css"
      // },
      {
        rel: "stylesheet",
        href: "/assets/css/style.css"
      }
    ],
    script: [
      {src: "/js/jquery214.js"},
      {src: "/js/jqueryscripts.js"},
      { src: '/js/bootstrap.js' },
      { src: '/js/owl-carousel/owlcarousel.js' }, 
      { src: '/js/masterslider/masterslider.js' },
      { src: '/js/jquerymatch.js' },
      { src: '/js/jquerydlmenu.js' },
      // { src: "/dashbord_assets/js/app.min.js" },
      // { src: "/dashbord_assets/js/chart.min.js" },
      // { src: "/dashbord_assets/js/table.min.js" },

      // { src: "/dashbord_assets/js/bundles/export-tables/jszip.js"},
      // { src: "/dashbord_assets/js/bundles/export-tables/jszip-utils.js"},
      // { src: "/dashbord_assets/js/pages/tables/jquery-datatable.js" },

      // { src: '/js/style-switcher/styleswitcher.js' },
      // { src: '/js/include.js' },
      { src: "/dashbord_assets/js/app.min.js" },
      { src: "/dashbord_assets/js/chart.min.js" },
      { src: "/dashbord_assets/js/table.min.js" },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/bootstrap.css',
    '~/assets/css/style.css',
    '~/assets/css/animate.css',
    '~/assets/css/color-default',
    '~/assets/css/retina.css',
    '~/assets/css/responsive.css',
    '~/assets/css/style.css',
    // '~/assets/css/styleSwitcher.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/appmin.js', ssr: false },
    { src: '~/plugins/mesFonctions/index.js', ssr: false },
    { src: '~/plugins/chat', ssr: false },
    // { src: '~/plugins/admin.js', ssr: false },
    // { src: '~/plugins/app.min.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/components',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    'nuxt-agile',
    'cookie-universal-nuxt',
    ['@nuxtjs/axios'],
    ['nuxt-gmaps', {
      key: 'AIzaSyCu_02TUhS9540ebRButDC8xjYhDhgqJs8',
      //you can use libraries: ['places']
    }]
  ],

  router: {
    linkActiveClass: '',
    linkExactActiveClass: 'current-menu-item'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  axios: {
    // baseURL: process.env.BASE_URL || 'https://transnet-admin.herokuapp.com',
    baseURL: process.env.BASE_URL || 'http://localhost:7001',
  }
}
