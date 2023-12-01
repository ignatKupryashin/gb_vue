<template>
  <div>
      <HeaderComponent/>
      <HomePageBaner/>
      <HomePageProject/>
      <HomePageCounter/>
      <HomePageArticles/>
      <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import HomePageBanner from '@/components/pages/HomePage/HomePageBanner.vue'
import HomePageProject from '@/components/pages/HomePage/HomePageProject.vue'
import HomePageCounter from '@/components/pages/HomePage/HomePageCounter.vue'
import HomePageArticles from '@/components/pages/HomePage/HomePageArticles.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import AppContainer from "@/components/ui/AppContainer.vue";

export default {
  name: 'HomePage',

  components: {
    AppContainer,
    HeaderComponent,
    HomePageBanner,
    HomePageProject,
    HomePageCounter,
    HomePageArticles,
    FooterComponent
  },

  data() {
    return {}
  },

  mounted() {

  },

  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
