<template>
  <div class="flex" v-if="currentSection">
    <sidebar :sections="sections" />
    <content-wrapper :title="currentSection.title">
      <course-content-area/>
      <div class="w-full mt-5 text-xl">
        <button v-if="this.currentSection.index !== 1" class="bg-green-200 p-3 w-12 hover:bg-green-300 float-left">
          <span @click="goToPreviousSection">←</span>
        </button>
        <button @click="goToNextSection" v-if="this.currentSection.index !== sections.length" class="bg-green-200 p-3 w-12 hover:bg-green-300 float-right">
          <span >→</span>
        </button>
        <button @click="true" v-if="this.currentSection.index == sections.length" class="flex bg-green-200 p-3 w-12 hover:bg-green-300 float-right">
          Done
        </button>
      </div>
    </content-wrapper>
  </div>
</template>

<script>
import ContentWrapper from "../components/ContentWrapper.vue";
import Sidebar from "../components/Sidebar.vue";
import CourseContentArea from "../components/CourseContentArea.vue";
export default {
  components: {Sidebar, ContentWrapper, CourseContentArea },
  computed:{
    sections(){
      return this.$store.state.currentSections;
    },
    currentSection(){
      return this.sections.find((section) => section.index == this.$route.params.sectionId)
    },
  },
  methods: {
    goToNextSection() {
      return this.$router.push({ name: 'Section', params: { sectionId: this.currentSection.index + 1 }})
    },
    goToPreviousSection(){
      return this.$router.push({ name: 'Section', params: { sectionId: this.currentSection.index - 1 }});
    }
  }
};
</script>
