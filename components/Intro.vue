<template lang="pug">
section.fullscreen.mx-auto
  .grid.grid-cols-2.grid-rows-1.h-full
    img.row-start-1(:class="`col-start-${face === 'right' ? '1' : '2'}`")
    .slashing.row-start-1.bg-white.text-yellow-800(:class="`col-start-${face === 'left' ? '1' : '2'}`")
      div(class="px-5 py-10 lg:px-10 lg:py-20")
        h2 Name
        h3 Nama Panjang
        p Description yang sangat panjang namun mencerahkan
</template>

<script lang="ts">
import Vue from "vue"
export type Users = "ayya" | "senja"
export type Facing = "left" | "right"
export default Vue.extend({
  name: "Intro",
  props: {
    user: {
      type: String as () => Users,
      required: true
    },
    face: {
      type: String as () => Facing,
      default: "left"
    }
  }
})
</script>
