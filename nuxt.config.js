import i18n from "./config/i18n"

const generalMeta = {
  siteName: "Ayya & Senja Wedding Announcement",
  title: "Ayya & Senja | The Wedding - 2020.12.19",
  description: "Wedding announcement of Ayya and Senja. Will be held at Serambi 17 Cipayung, East Jakarta."
}
export default {
  ssr: true,

  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: generalMeta.title,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: generalMeta.description },

      { hid: "twitter:title", property: "twitter:title", content: generalMeta.title },
      { hid: "twitter:description", property: "twitter:description", content: generalMeta.description },

      { hid: "og:title", property: "og:title", content: generalMeta.title },
      { hid: "og:url", property: "og:url", content: generalMeta.url },
      { hid: "og:site_name", property: "og:site_name", content: generalMeta.siteName },
      { hid: "og:description", property: "og:description", content: generalMeta.description },
      { hid: "og:type", property: "og:type", content: "website" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      { rel: "manifest", href: "/manifest.json" }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config -css)
  css: [
    "~/assets/common.styl",
    "vue-pure-lightbox/dist/VuePureLightbox.css"
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "~/plugins/observer.ts"
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    ["nuxt-i18n", i18n]
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [

    ]
  },

  i18n
}
