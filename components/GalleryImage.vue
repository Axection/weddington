<template lang="pug">
.gallery-item.flex-shrink-0.my-1.ml-3.bg-white.border-0.rounded-lg.shadow-md.h-auto.w-full(class="lg:my-3 lg:ml-3")
  lightbox.h-full(:thumbnail="src" :images="[fullSrc]")
</template>

<script lang="ts">
import Vue from "vue"
import Lightbox from "vue-pure-lightbox"

export default Vue.extend({
  name: "GalleryImage",
  components: {
    Lightbox
  },
  props: {
    src: {
      type: String as () => string,
      required: true
    },
    fullSrc: {
      type: String as () => string,
      required: true
    }
  }
})
</script>

<style lang="stylus">
$scale_sm = 2
$scale_lg = 4

.gallery-item
  width 4rem * $scale_sm
  height 3rem * $scale_sm

@screen lg
  .gallery-item
    transition filter 300ms
    width 4rem * $scale_lg
    height 3rem * $scale_lg

.gallery-item .lightbox__close
  z-index 1001

.gallery-item .lightbox__thumbnail > img
  @apply h-full
  @apply object-cover

.gallery-item .lightbox__image
  height 100vh

  & > img
    height 100% !important
    @apply object-contain
</style>
