<template>
    <content-wrapper :title="sections[0].title">
      <course-content-area/>
      <div class="flex w-full mt-5 justify-between text-xl">
        <button class="bg-green-200 p-3 w-12 hover:bg-green-300">
          <span @click="goToPreviousSection">←</span>
        </button>
        <button class="bg-green-200 p-3 w-12 hover:bg-green-300">
          <span @click="goToNextSection">→</span>
        </button>
      </div>
    </content-wrapper>
</template>

<script>
import ContentWrapper from "../components/ContentWrapper.vue";
import CourseContentArea from "../components/CourseContentArea.vue";
export default {
  components: {ContentWrapper, CourseContentArea },
  data() {
  },
  computed:{
    sections(){
      return this.$store.state.currentSections;
    }
  },
  methods: {
    goToNextSection() {
      return 0;
    },
    goToPreviousSection(){
      return 0;
    }
  }
};
</script>
