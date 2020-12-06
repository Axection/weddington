export default {
  locales: ["en", "id"],
  vueI18nLoader: true,
  strategy: "prefix",
  defaultLocale: "en",
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: "lang_redir",
    onlyOnRoot: true // recommended
  },
  vueI18n: {
    fallbackLocale: "en"
    // messagaes:
  }
}
