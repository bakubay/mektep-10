<template>
  <div class="flex">
    <!-- <sidebar :items="items"/> -->
    <content-wrapper :title="`All courses`">
      <CourseListing :coursesList="courses" />
    </content-wrapper>
  </div>
</template>

<script>
import CourseListing from "../components/CourseListing.vue";
import ContentWrapper from "../components/ContentWrapper.vue";

export default {
  name: "Home",
  components: { CourseListing, ContentWrapper},
  data() {
    return {

    };
  },
  computed: {
    courses(){
      return this.$store.state.courses
    }
  },
  created(){
    this.$store.dispatch("pullCourses")
  }
};
</script>
