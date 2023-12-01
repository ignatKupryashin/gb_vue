<template>
  <div>
      <HeaderComponent/>
      <BlogPageBanner/>
      <BlogPageLastPost/>
      <BlogPageBlogs/>
      <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import BlogPageLastPost from '@/components/pages/BlogPage/BlogPageLastPost.vue'
import BlogPageBlogs from '@/components/pages/BlogPage/BlogPageBlogs.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import AppContainer from "@/components/ui/AppContainer.vue";
import BlogPageBanner from "@/components/pages/BlogPage/BlogPageBanner.vue";

export default {
  name: 'BlogPage',

  components: {
    AppContainer,
    HeaderComponent,
    BlogPageBanner,
    BlogPageLastPost,
    BlogPageBlogs,
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
