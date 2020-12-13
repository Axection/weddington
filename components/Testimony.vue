<template lang="pug">
.testimony.text-center.px-8(class="lg:px-20" v-observe-visibility="observer")
  h2.py-4.text-rustic-500.text-lg(class="lg:text-2xl") {{ $tc('comment') }}
  .visible
    disqus(v-if="show" :lang="oneTimeLang()")
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "Testimony",
  components: {
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    oneTimeLang() {
      return () => this.$i18n.locale
    },
    observer() {
      return {
        callback: (isVisible: boolean) => {
          if (this.show !== isVisible) { this.show = isVisible }
        },
        once: true,
        intersection: {
          throttle: 150,
          threshold: 0.3
        }
      }
    }
  }
})
</script>

<style lang="stylus" scoped>

</style>

<i18n>
{
  "en": {
    "comment": "Leave your comments here!"
  },
  "id": {
    "comment": "Ada komentar? tinggalkan pesan di sini!"
  }
}
</i18n>
