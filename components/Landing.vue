<template lang="pug">
section.landing.desktop.mobile.fullscreen.bg-landing.grid.grid-cols-3.grid-rows-3
  .logo.row-start-2.col-start-2
    span.text-white Ayya &amp; Senja
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "Landing"
})
</script>

<style lang="stylus" scoped>
.bg-landing
  background-image url("https://lorempixel.com/1280/720")
.landing
  @apply bg-black.grid
  &.desktop
    //  @apply
  &.mobile
    // @apply
</style>
