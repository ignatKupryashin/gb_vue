<template>
  <div>
      <HeaderComponent/>
      <ProjectPageBanner/>
      <ProjectPageContent/>
      <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import ProjectPageBanner from '@/components/pages/ProjectPage/ProjectPageBanner.vue'
import ProjectPageContent from '@/components/pages/ProjectPage/ProjectPageContent.vue'
import AppContainer from "@/components/ui/AppContainer.vue";

export default {
  name: 'ProjectPage',
  data() {
    return {}
  },
  mounted() {
  },
  methods: {},
  components: {
    AppContainer,
    HeaderComponent,
    FooterComponent,
    ProjectPageBanner,
    ProjectPageContent
  }
}
</script>

<style lang="scss" scoped>
</style>
