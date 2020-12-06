<template lang="pug">
section.gallery.grid
  .gallery-title.col-start-1.row-start-1.bg-white.relative.flex.justify-center.flex-col.pl-5(class="lg:pl-10")
    h2.text-5xl.leading-tight.text-rustic-700(class="lg:text-8xl") {{ $t("gallery") }}
    h3.pl-5.text-xl.text-rustic-500 {{ $t("galleryDesc") }}
  .gallery-slash.col-start-1.row-start-2.w-56.drop-shadow.pointer-events-none.relative.hidden(class="lg:block lg:col-start-2 lg:row-start-1")
    svg.h-full.w-24(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none")
      polygon(fill="white" points="0,0 100,0 30,100 0,100")
  .gallery-masonry.col-start-1.row-start-3.h-full.overflow-x-scroll.overflow-y-hidden(class="py-5 lg:py-20 lg:row-start-1 lg:col-start-3")
    .h-full.flex.flex-col.justify-center
      .masonry.flex.flex-none.flex-row.pl-5(class="h-1/3 lg:pl-20")
        GalleryImage(v-for="n in 10")
      .masonry.flex.flex-none.flex-row.pl-5(class="h-1/3 lg:pl-16")
        GalleryImage(v-for="n in 9")
      .masonry.flex.flex-none.flex-row.pl-5(class="h-1/3 lg:pl-12")
        GalleryImage(v-for="n in 11")
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
  @apply grid-cols-1
  @apply flex-row
  background-image linear-gradient(to right, theme('colors.white'), theme('colors.white'))
  grid-template-rows theme('spacing.20') 5px 1fr

@screen lg
  .gallery
    @apply grid-rows-1
    @apply flex-col
    grid-template-columns 1fr 5px 2fr

    &-slash
      filter drop-shadow(5px 0px 3px white) drop-shadow(7px 0px 5px white) drop-shadow(10px 0 15px white)

.diagonal
  @apply bg-white
  @apply absolute
  @apply w-20
  @apply h-full
  left 0

  clip-path polygon(0 0, 100% 0, 30% 100%, 0 100%)
</style>

<i18n>
{
  "en": {
    "gallery": "Gallery",
    "galleryDesc": "Our gallery hahaha"
  },
  "id": {
    "gallery": "Galeri",
    "galleryDesc": "Galeri kami bersama"
  }
}
</i18n>
