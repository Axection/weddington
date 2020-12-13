<template lang="pug">
.site.pt-20(class="lg:px-20")
  .bg-white.px-5.pt-5.pb-8.text-center.text-rustic-800
    h2.text-rustic-500.text-xl(class="lg:text-6xl") Agenda
    h3.mt-1.text-rustic-300.text-lg(class="lg:text-2xl") {{ $tc('location') }}
    a(href="https://www.instagram.com/serambi_17/" target="_blank" class="hover:underline semi") Gedung Serambi 17
      |  {{ $tc('district') }}
    h3.mt-1.text-rustic-300.text-lg(class="lg:text-2xl") {{ $tc('time') }}
    p {{ $tc('akad') }}
    p {{ $tc('akad_time') }}

</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "Site"
})
</script>

<style lang="stylus" scoped>
.site
  padding-top 75%
  padding-right 10%
  padding-left 10%
  padding-bottom 5%
  background-image linear-gradient(to top, #ffffffaa, #ffffffaa), url("~assets/images/serambi17.jpg")
  @apply bg-cover bg-top

@screen lg
  .site
    padding-top 25%
    padding-right 25%
    padding-left 25%
    padding-bottom 15%
    @apply bg-bottom
</style>

<i18n>
{
  "en": {
    "location": "Location",
    "district": "Cipayung, East Jakarta",
    "time": "Time",
    "akad": "Wedding Ceremonial",
    "akad_time": "09:30 AM"
  },
  "id": {
    "location": "Lokasi",
    "district": "Cipayung, Jakarta Timur",
    "time": "Waktu",
    "akad": "Akad Nikah",
    "akad_time": "09:30 Pagi"
  }
}
</i18n>
