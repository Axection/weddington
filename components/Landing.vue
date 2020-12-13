<template lang="pug">
section.leading-tight.text-center.logo.text-rustic-700.landing.desktop.mobile.fullscreen.bg-landing.grid.grid-cols-3.grid-rows-mobile(class="lg:grid-rows-3")
  .row-start-1.col-start-2.flex.flex-col.justify-center.items-center
    span.text-md.uppercase.tracking-landing(class="lg:text-lg") {{ $tc("wedding") }}
  .row-start-2.col-start-2.flex.flex-col.justify-center.items-center
    span.font-display.text-6xl(class="lg:text-8xl")
      | Ayya
      |
    span.font-display.text-3xl.ampersand(class="lg:text-6xl" style="transform: translateY(0.5rem)") &amp;
    span.font-display.text-6xl(class="lg:text-8xl")
      |
      | Senja
  .row-start-3.col-start-2.flex.flex-col.justify-center.items-center
    span.text-md.uppercase.tracking-widest(class="lg:text-lg") {{ $tc("wedding_date") }}
    span.mt-1.text-md.tracking-wide Serambi 17, Cipayung
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "Landing"
})
</script>

<style lang="stylus" scoped>
.grid-rows-mobile
  grid-template-rows 1fr 3fr 2fr
.bg-landing
  background-image url('~assets/images/Landing.jpg')

  &:after
    content ''
    position absolute
    bottom -1px
    width 100%
    @apply h-20
    background linear-gradient(to top, white, transparent)

@screen lg
  .bg-landing
    background-position center 35%
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
