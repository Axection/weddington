<template lang="pug">
section.bg-covid(class="px-0 lg:px-auto")
  .covid-info.mx-auto.bg-white.text-rustic-800.h-full(class="w-11/12 lg:w-3/4 px-12 lg:px-32 py-16 lg:py-20")
    h2.text-2xl(class="lg:text-6xl").text-rustic-300 {{ $tc('sorry') }}
    p.text-md(class="lg:text-lg") {{ $tc('description') }}
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "CovidInfo"
})
</script>

<style lang="stylus" scoped>
.bg-covid
  @apply bg-center bg-cover
  background-image url("https://lorempixel.com/1024/576")

.covid-info
  clip-path polygon(10% 0, 100% 0, 90% 100%, 0 100%)
</style>

<i18n>
{
  "en": {
    "sorry": "But, we're sorry...",
    "description": "Due to recent events.. blahblahblah"
  },
  "id": {
    "sorry": "Kami mohon maaf...",
    "description": "Berkenaan dengan pandemi... blahblahblah"
  }
}
</i18n>
