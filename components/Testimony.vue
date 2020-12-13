<template lang="pug">
.testimony.text-center.px-8(class="lg:px-20")
  h2.py-4.text-rustic-500.text-lg(class="lg:text-2xl") {{ $tc('comment') }}
  disqus(:lang="$i18n.locale")
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "Testimony",
  components: {
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
