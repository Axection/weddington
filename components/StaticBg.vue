<template lang="pug">
section.bg-fixed.fullbg.bg-cover.bg-center
  slot(name="default")
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({

})
</script>

<style lang="stylus" scoped>
.fullbg
  background-image url("https://lorempixel.com/1366/768")
</style>
