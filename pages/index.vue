<template lang="pug">
.hey
  Landing(class="xl:mb-20 mb-10")
  StaticBg(class="xl:mb-20 mb-10")
    Intro(user="ayya" face="right" class="xl:mb-20 mb-10")
    Intro(user="senja" face="left" class="xl:mt-20 mb-10")
  CovidInfo(class="xl:mb-20 mb-10")
  Gallery(class="xl:mb-20 mb-10")
  Testimony(class="xl:mb-20 mb-10")
  Footer
</template>

<script lang="ts">
import Vue from "vue"
import Landing from "~/components/Landing.vue"
import CovidInfo from "~/components/CovidInfo.vue"
import Intro from "~/components/Intro.vue"
import Gallery from "~/components/Gallery.vue"
import Testimony from "~/components/Testimony.vue"
import Footer from "~/components/Footer.vue"
import StaticBg from "~/components/StaticBg.vue"

export default Vue.extend({
  name: "Page",
  components: {
    Landing,
    Intro,
    CovidInfo,
    Gallery,
    Testimony,
    Footer,
    StaticBg
  }
})
</script>

<style lang="stylus">
.fullscreen
  @apply h-screen w-screen
  @apply bg-center bg-cover
  // background-image url("https://lorempixel.com/1280/720")
</style>
