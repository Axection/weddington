<template lang="pug">
section.bg-fixed.fullbg.bg-cover.bg-center
  .bg-white.w-full.leftovers
    p.text-rustic-500.text-lg.text-center.py-10.tracking-widest(class="lg:text-4xl") {{ $tc('bridegroom')}}
  slot(name="default")
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({

})
</script>

<style lang="stylus" scoped>
.fullbg
  background-image url("https://lorempixel.com/1366/768")

.leftovers:after
  content ''
  @apply w-full
  @apply h-10
  position absolute
  background linear-gradient(to bottom, white, transparent)
  transform translateY(-1px)
  z-index 3
</style>

<i18n>
{
  "en": {
    "bridegroom": "Bride and Groom"
  },
  "id": {
    "bridegroom": "Mempelai"
  }
}
</i18n>
