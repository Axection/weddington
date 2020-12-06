<template lang="pug">
section.landing.desktop.mobile.fullscreen.bg-landing.grid.grid-cols-3.grid-rows-3
  .leading-tight.logo.text-rustic-700.row-start-1.row-span-3.col-start-2.flex.flex-col.justify-center.text-center.items-center
    span.text-md.uppercase.mb-32.tracking-landing(class="lg:text-lg") {{ $t("wedding") }}
    span.font-display.text-6xl(class="lg:text-lg-landing")
      | Ayya
      |
    span.font-display.text-3xl.ampersand(class="lg:text-6xl" style="transform: translateY(15px)") &amp;
    span.font-display.text-6xl(class="lg:text-lg-landing")
      |
      | Senja
    span.text-md.uppercase.mt-32.tracking-widest(class="lg:text-lg") {{ $t("wedding_date") }}
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "Landing"
})
</script>

<style lang="stylus" scoped>
.bg-landing
  background-image linear-gradient(#ffffffaa, #ffffffaa), url(https://lorempixel.com/1280/720)
.landing
  @apply bg-black.grid
  &.desktop
    //  @apply
  &.mobile
    // @apply
</style>

<i18n>
{
  "en": {
    "wedding": "The Wedding",
    "wedding_date": "Dec 19th, 2020"
  },
  "id": {
    "wedding": "Pernikahan",
    "wedding_date": "19 Des 2020"
  }
}
</i18n>
