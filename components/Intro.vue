<template lang="pug">
.bg-center.bg-cover.mx-auto(class="lg:top-0 lg:sticky")
  .grid.grid-cols-5.grid-rows-1.h-full
    .img-container.h-screen.row-start-1.col-span-2.flex.justify-center(:class="`col-start-${face === 'right' ? '1' : 4}`")
      img(src="https://lorempixel.com/600/1080")
    .h-screen.row-start-1.col-span-3.bg-white(:class="`col-start-${face === 'left' ? '1' : '3'} slashing-${face}`")
      .text-rustic-600(:class="`px-5 py-10 lg:px-20 lg:py-40 text-${face}`")
        span.text-rustic-300.text-md.leading-none(class="lg:text-lg") {{ status }}
        h2.text-4xl.leading-tight(class="lg:text-6xl") {{ nickName }}
        h3.text-md.leading-tight(class="lg:text-xl") {{ fullName }}
        p.text-md.mt-4.text-rustic-500(class="lg:text-lg lg:mt-8") "{{ description}}"
</template>

<script lang="ts">
import Vue from "vue"

export type Facing = "left" | "right"
export default Vue.extend({
  name: "Intro",
  props: {
    nickName: {
      type: String as () => string,
      default: ""
    },
    fullName: {
      type: String as () => string,
      default: ""
    },
    description: {
      type: String as () => string,
      default: ""
    },
    face: {
      type: String as () => Facing,
      default: "left"
    },
    status: {
      type: String,
      default: "Bride"
    }
  }
})
</script>

<style lang="stylus" scoped>
.slashing
  &-left
    clip-path polygon(0 0, 60% 0, 100% 100%, 0 100%)
  &-right
    clip-path polygon(0 0, 100% 0, 100% 100%, 40% 100%)

</style>
