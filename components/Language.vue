<template lang="pug">
.language-selector.absolute.rounded-full.py-1.pl-4.pr-6.m-3.z-50.bg-white.border-2.border-rustic-200
  label.hidden.text-rustic-500(for="lang-selector" class="lg:inline") {{ $tc('choose' )}}
  select(id="lang-selector" v-model="lang" :placeholder="`Language: ${lang}`")
    option(class="lg:block" v-for="locale in availableLocales" :key="locale" :value="locale") {{ $tc(`${locale}_s`) }}
  .triangle.w-4.relative.inline
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
select
  // A reset of styles, including removing the default dropdown arrow
  appearance none
  // Additional resets for further consistency
  background-color transparent
  border none
  padding 0 0.25rem 0 0
  margin 0
  // width 100%
  font-family inherit
  font-size inherit
  cursor inherit
  line-height inherit
  grid-template-areas "select"

  // &::-ms-expand
  //   display none

.triangle

  &:after
    content ""
    width 0.5rem
    height 0.5rem
    display inline
    clip-path polygon( 0 0%, 100% 50%, 0 100%)
    position absolute
    left 0
    top 0.35rem
    @apply bg-black
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
