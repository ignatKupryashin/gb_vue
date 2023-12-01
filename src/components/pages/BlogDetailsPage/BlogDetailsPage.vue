<template>
  <div>
      <HeaderComponent/>
      <BlogDetailsPageBanner/>
      <BlogDetailsPageArticles/>
      <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import BlogDetailsPageBanner from '@/components/pages/BlogDetailsPage/BlogDetailsPageBanner.vue'
import BlogDetailsPageArticles from '@/components/pages/BlogDetailsPage/BlogDetailsPageArticles.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import AppContainer from "@/components/ui/AppContainer.vue";

export default {
  name: 'BlogDetailsPage',

  components: {
    AppContainer,
    HeaderComponent,
    BlogDetailsPageBanner,
    BlogDetailsPageArticles,
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
