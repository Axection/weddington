<template lang="pug">
img(:src="src").gallery-item.mx-3.bg-white.border-0.rounded-lg.shadow-md
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "GalleryImage",
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
