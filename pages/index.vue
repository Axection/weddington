<template lang="pug">
.hey
  Landing
  StaticBg(class="xl:mb-20 mb-10")
    Intro(
      :full-name="ayyaDetails.fullName"
      :description="ayyaDetails.description"
      :nick-name="ayyaDetails.nickName"
      face="right"
      :status="$tc('bride')"
      :forceHide="belowIsShown"
      :child-of="$tc('bridechild')"
      :parents="ayyaParents"
    )
    .big-space
    Intro(
      :full-name="senjaDetails.fullName"
      :description="senjaDetails.description"
      :nick-name="senjaDetails.nickName"
      face="left"
      :status="$tc('groom')"
      @forceHide="belowIsShown = $event"
      :child-of="$tc('groomchild')"
      :parents="senjaParents"
    )
    .big-space
  CovidInfo(class="xl:mb-20 mb-10")
  Gallery(class="xl:mb-20 mb-10")
  Testimony(class="xl:mb-20 mb-10")
  Footer
</template>

<script lang="ts">
import Vue from "vue"
import Landing from "~/components/Landing.vue"
import CovidInfo from "~/components/CovidInfo.vue"
import Intro from "~/components/Intro.vue"
import Gallery from "~/components/Gallery.vue"
import Testimony from "~/components/Testimony.vue"
import Footer from "~/components/Footer.vue"
import StaticBg from "~/components/StaticBg.vue"

export interface IntroDetail {
  nickName: string
  fullName: string
  description?: | string
}

export interface Parent {
  name: string
  imageUrl: string
}

export default Vue.extend({
  name: "Page",
  components: {
    Landing,
    Intro,
    CovidInfo,
    Gallery,
    Testimony,
    Footer,
    StaticBg
  },
  data() {
    return {
      belowIsShown: false
    }
  },
  computed: {
    ayyaDetails() : IntroDetail {
      return {
        nickName: "Ayya",
        fullName: "Wayan Nur Pangesti",
        description: this.$tc("ayyaDesc")
      }
    },
    senjaDetails() : IntroDetail {
      return {
        nickName: "Senja",
        fullName: "Hafidh Rashemi Rafsanjany",
        description: this.$tc("senjaDesc")
      }
    },
    ayyaParents() : Parent[] {
      return [
        {
          name: "Yoesman Sunarhadi",
          imageUrl: "https://lorempixel.com/64/64" // import() AyyaDad
        },
        {
          name: "Sugiharni",
          imageUrl: "https://lorempixel.com/64/64"
        }
      ]
    },
    senjaParents() : Parent[] {
      return [
        {
          name: "Nasir Azis",
          imageUrl: "https://lorempixel.com/64/64"
        },
        {
          name: "Siti Khadijah",
          imageUrl: "https://lorempixel.com/64/64"
        }
      ]
    }
  }
})
</script>

<style lang="stylus">
.fullscreen
  @apply h-screen w-auto
  @apply bg-center bg-cover
  // background-image url("https://lorempixel.com/1280/720")

.big-space
  height calc(theme('spacing.20') * 0)

@screen lg
  .big-space
    height calc(theme('spacing.20') * 15)
</style>

<i18n>
{
  "en": {
    "ayyaDesc": "Something",
    "senjaDesc": "Seomthing",
    "groom": "The Groom",
    "bride": "The Bride",
    "groomchild": "First son of",
    "bridechild": "First daughter of"
  },
  "id": {
    "ayyaDesc": "Sesuatu",
    "senjaDesc": "Sesuasu",
    "groom": "Mempelai Pria",
    "bride": "Mempelai Wanita",
    "groomchild": "Putra pertama dari",
    "bridechild": "Putri pertama dari"
  }
}
</i18n>
