<template lang="pug">
.bg-center.bg-cover.mx-auto.overflow-hidden(class="lg:top-0 lg:sticky" v-observe-visibility="observer")
  .intro-content.grid.grid-rows-5.grid-cols-1.h-screen(:class="`${(!show || forceHide ) ? 'hide' : ''} ${face} lg:h-full lg:grid-cols-5 lg:grid-rows-1`")
    .img-container.flex.justify-center.col-start-1.row-start-1.row-span-2(:class="`lg:h-screen lg:row-start-1 lg:col-span-2 lg:col-start-${face === 'right' ? '1' : 4}`")
      img.object-cover.object-top(class="lg:object-contain" src="https://lorempixel.com/600/1080")
    .description.bg-white.col-start-1.row-start-3.row-span-3(:class="`lg:h-screen lg:row-start-1 lg:col-span-3 lg:col-start-${face === 'left' ? '1' : '3'} slashing-${face}`")
      .text-rustic-600(:class="`px-5 py-10 lg:px-20 lg:py-40 text-${face}`")
        span.text-rustic-300.text-md.leading-none(class="lg:text-lg") {{ status }}
        h2.text-4xl.leading-tight(class="lg:text-6xl") {{ nickName }}
        h3.text-md.leading-tight(class="lg:text-xl") {{ fullName }}
        p.text-md.mt-4.text-rustic-500(class="lg:text-lg lg:mt-8") "{{ description}}"
        h3.mt-4.text-rustic-300.text-md(class="lg:text-xl") Putra pertama dari
        .text-md.text-rustic-500(class="lg:text-lg")
          p (P)
          span Nama ortu
          p (PP)
          span Nama ortu
        span.text-left.text-right
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
    },
    forceHide: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    observer() {
      return {
        callback: (isVisible: boolean) => {
          this.$emit("forceHide", isVisible)
          if (this.show !== isVisible) { this.show = isVisible }
        },
        intersection: {
          throttle: 150,
          root: document,
          threshold: 0.3
        }
      }
    }
  }
})
</script>

<style lang="stylus" scoped>
$bezier = cubic-bezier(0.36, 0.5, 0.27, 0.96)
$opacity_b = cubic-bezier(0.88, 0.02, 0.38, 0.9)
$latency = 72ms

.intro-content
  transition opacity 667ms $opacity_b
  transition-delay $latency

  .img-container
    transition transform 500ms $bezier
    transition-delay $latency
  .description
    transition transform 875ms $bezier
    transition-delay $latency
  &.hide
    .img-container
      transform translateY(2.5rem)
    .description
      transform translateX(3.75rem)
    &.left .description
      transform translateX(-3.75rem)

@screen lg
  .slashing
    &-left
      clip-path polygon(0 0, 60% 0, 100% 100%, 0 100%)
    &-right
      clip-path polygon(0 0, 100% 0, 100% 100%, 40% 100%)

.hide
  opacity 0
</style>
