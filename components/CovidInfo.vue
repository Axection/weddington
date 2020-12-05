<template lang="pug">
section.bg-covid.py-20(class="px-0 lg:px-auto")
  .covid-info.mx-auto.bg-white.text-rustic-900.h-full(class="w-10/12 lg:w-2/4")
    h2 But we're sorry...
    p Due to recent events.. blahblahblah
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
</style>
