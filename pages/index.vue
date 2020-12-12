<template lang="pug">
.hey
  Landing
  StaticBg(class="xl:mb-20 mb-10")
    Intro(
      :full-name="ayyaDetails.fullName"
      :description="ayyaDetails.description"
      :nick-name="ayyaDetails.nickName"
      :person-src="ayyaDetails.image"
      face="left"
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
      :person-src="senjaDetails.image"
      face="right"
      :status="$tc('groom')"
      @forceHide="belowIsShown = $event"
      :child-of="$tc('groomchild')"
      :parents="senjaParents"
    )
    .big-space
  CovidInfo(class="xl:mb-20 mb-10")
  Gallery(class="xl:mb-20 mb-10" :gallery-list="galleryList")
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
  image: string
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
  asyncData() {
    const importAll = (r : __WebpackModuleApi.RequireContext, label: string) => r.keys().map(key => ({ fullSrc: r(key), fileName: key.replace("./", ""), label }))
    const albumScript = require.context("~/assets/images/album/", true)
    const thumbnailScript = require.context("~/assets/images/thumbnail/", true)
    const album = importAll(albumScript, "album").map(i => ({ album: i.fullSrc, id: i.fileName }))
    const thumbnail = importAll(thumbnailScript, "thumbnail").map(i => ({ thumbnail: i.fullSrc, id: i.fileName }))
    return {
      galleryList: album.map(i => ({ fullSrc: i.album, src: thumbnail.find(k => k.id === i.id)?.thumbnail }))
    }
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
        description: this.$tc("ayyaDesc"),
        image: require("~/assets/images/Ayya.png") as string

      }
    },
    senjaDetails() : IntroDetail {
      return {
        nickName: "Senja",
        fullName: "Hafidh Rashemi Rafsanjany",
        description: this.$tc("senjaDesc"),
        image: require("~/assets/images/Senja.png") as string
      }
    },
    ayyaParents() : Parent[] {
      return [
        {
          name: "(alm.) H. Yoesman Sunarhadi",
          imageUrl: require("~/assets/images/ayya-parent1.jpg") as string // import() AyyaDad
        },
        {
          name: "Hj. Sugiharni",
          imageUrl: require("~/assets/images/ayya-parent2.jpg") as string
        }
      ]
    },
    senjaParents() : Parent[] {
      return [
        {
          name: "Nasir Azis",
          imageUrl: require("~/assets/images/senja-parent1.jpg") as string
        },
        {
          name: "Siti Khadijah",
          imageUrl: require("~/assets/images/senja-parent2.jpg") as string
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
