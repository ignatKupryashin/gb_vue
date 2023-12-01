<template>
  <div>
      <HeaderComponent/>
      <ProjectDetailsBanner/>
      <ProjectDetailsContent/>
      <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import ProjectDetailsBanner from '@/components/pages/ProjectDetailsPage/ProjectDetailsBanner.vue'
import ProjectDetailsContent from '@/components/pages/ProjectDetailsPage/ProjectDetailsContent.vue'
import AppContainer from "@/components/ui/AppContainer.vue";

export default {
  components: {AppContainer, HeaderComponent, FooterComponent, ProjectDetailsBanner, ProjectDetailsContent},
  name: 'ProjectDetails',

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
