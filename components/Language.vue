<template lang="pug">
.language-selector.absolute.rounded-full.py-1.px-4.m-3.z-50.bg-white.border-2.border-rustic-200
  label.hidden.text-rustic-500(for="lang-selector" class="lg:inline") {{ $tc('choose' )}}
  select(id="lang-selector" v-model="lang" :placeholder="`Language: ${lang}`")
    option(class="lg:block" v-for="locale in availableLocales" :key="locale" :value="locale") {{ $tc(`${locale}_s`) }}
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "LanguageSelector",
  data() {
    return {
      lang: this.$i18n.locale
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales
    }
  },
  watch: {
    lang(val : string) {
      this.$router.replace(this.switchLocalePath(val))
    }
  }
})
</script>

<style lang="stylus" scoped>

</style>

<i18n>
{
  "en": {
    "choose": "Language: ",
    "en": "English",
    "en_s": "EN",
    "id": "Indonesia",
    "id_s": "ID"
  },
  "id": {
    "choose": "Bahasa: ",
    "en": "English",
    "en_s": "EN",
    "id": "Indonesia",
    "id_s": "ID"
  }
}
</i18n>
