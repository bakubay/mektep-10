<template>
  <div class="flex">
    <sidebar :items="sections" />
    <content-wrapper :title="sections[0].courseName">
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
  </div>
</template>

<script>
import ContentWrapper from "../components/ContentWrapper.vue";
import Sidebar from "../components/Sidebar.vue";
import CourseContentArea from "../components/CourseContentArea.vue";
export default {
  components: { Sidebar, ContentWrapper, CourseContentArea },
  data() {
    return {
      currentSection: null,
      sections: [
        {
          courseName: "Math for beginners",
          courseUrl: "google.com",
        },
        {
          courseName: "Biology I",
          courseUrl: "blahblahblah",
        },
        {
          courseName: "Biology I",
          courseUrl: "blahblahblah",
        },
        {
          courseName: "Biology I",
          courseUrl: "blahblahblah",
        },
        {
          courseName: "Biology I",
          courseUrl: "blahblahblah",
        },
        {
          courseName: "Biology I",
          courseUrl: "blahblahblah",
        },
        {
          courseName: "Biology I",
          courseUrl: "blahblahblah",
        },
        {
          courseName: "Biology I",
          courseUrl: "blahblahblah",
        },
        {
          courseName: "Biology I",
          courseUrl: "blahblahblah",
        },
      ],
    };
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
