<template>
  <div class="flex" v-if="currentCourse">
    <sidebar :sections="sections" />
    <content-wrapper :title="currentCourse[0].courseName">
      <div class="flex flex-col-reverse md:flex-row mt-4 justify-between py-4">
        <div class="flex-1 mr-4">{{currentCourse[0].courseDescription}}</div>
        <div class="w-full flex flex-col md:w-1/3 rounded-md">
          <img
            class="w-36 h-36 md:w-full md:h-auto md:rounded-none rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/1200px-Coursera-Logo_600x600.svg.png"
          />
          <router-link :to="{name: 'Section', params: {sectionId: `asd`}}" class="w-full px-6 py-2 mt-2 bg-green-100 hover:bg-green-500 text-center">Start</router-link>
        </div>
      </div>
    </content-wrapper>
  </div>
</template>

<script>
import ContentWrapper from "../components/ContentWrapper.vue";
import Sidebar from "../components/Sidebar.vue";
export default {
  components: { ContentWrapper, Sidebar },
  data(){
    return {
      currentCourse: null,
      }
  },
  computed: {
    sections(){
      return this.$store.state.currentSections
    }
  },
  async mounted(){
    this.currentCourse = await this.$store.state.courses.filter((course) => {
      return course.courseId === this.$route.params.courseId;
    });
    this.$store.dispatch("pullCourseSections", this.$route.params.courseId)
  }
};

</script>
