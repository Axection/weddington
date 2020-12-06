<template lang="pug">
.gallery-item.flex-shrink-0.my-1.ml-3.bg-white.border-0.rounded-lg.shadow-md.h-auto.w-full(class="lg:my-3 lg:ml-3")
  lightbox(:thumbnail="src" :images="['https://lorempixel.com/800/600']")
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
      default: "https://lorempixel.com/400/300"
    }
  }
})
</script>

<style lang="stylus" scoped>
$scale_sm = 2
$scale_lg = 4

.gallery-item
  width 4rem * $scale_sm
  height 3rem * $scale_sm

@screen lg
  .gallery-item
    width 4rem * $scale_lg
    height 3rem * $scale_lg
</style>
