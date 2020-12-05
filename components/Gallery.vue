<template lang="pug">
section.gallery.fullscreen.grid.grid-cols-2
  .side.col-start-1
    h2 Gallery
    h3 Our gallery blahblahblah
  .masonry.col-start-2.flex.items-center
    .w-full-h-full.px-25.py-25.overflow-scroll
      .masonry.pl-4.flex.flex-row.mb-10
        GalleryImage.flex-shrink-0(v-for="n in 10")
      .masonry.pl-10.flex.flex-row.mb-10
        GalleryImage.flex-shrink-0(v-for="n in 9")
      .masonry.pl-6.flex.flex-row.mb-10
        GalleryImage.flex-shrink-0(v-for="n in 11")
</template>

<script lang="ts">
import Vue from "vue"
import GalleryImage from "~/components/GalleryImage.vue"

export default Vue.extend({
  name: "Gallery",
  components: {
    GalleryImage
  }
})
</script>

<style lang="stylus" scoped>
.gallery
  background-image linear-gradient(to right, theme('colors.blue.100'), theme('colors.blue.100'))
</style>
