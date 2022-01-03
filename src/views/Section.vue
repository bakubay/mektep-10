<template>
  <div class="flex">
    <sidebar :sections="sections" />
    <content-wrapper :title="currentSection.title">
      <course-content-area/>
      <div class="flex w-full mt-5 justify-between text-xl">
        <button v-if="currentSection.index === 1" class="bg-green-200 p-3 w-12 hover:bg-green-300">
          <span @click="goToPreviousSection">←</span>
        </button>
        <button v-if="currentSection.index === sections.length + 1" class="bg-green-200 p-3 w-12 hover:bg-green-300">
          <span @click="goToNextSection">→</span>
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
  data() {
  },
  computed:{
    sections(){
      return this.$store.state.currentSections;
    },
    currentSection(){
      return this.sections.find((section) => section.url === this.$route.params.sectionId)
    },
  },
  methods: {
    goToNextSection() {
      return this.sections.find((section) => section.index === this.$store.state.currentSection.index);
    },
    goToPreviousSection(){
      return 0;
    }
  }
};
</script>
