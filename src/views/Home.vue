<template>
  <div class="flex" v-if="coursesLoaded">
    <!-- <sidebar :items="items"/> -->
    <content-wrapper :title="`All courses`">
      <CourseListing :coursesList="courses" />
    </content-wrapper>
  </div>
  <Spinner v-else />
</template>

<script>
import CourseListing from "../components/CourseListing.vue";
import ContentWrapper from "../components/ContentWrapper.vue";
import Spinner from "../components/utils/Spinner.vue";

export default {
  name: "Home",
  components: { CourseListing, ContentWrapper, Spinner},
  data() {
    return {
      coursesLoaded: false
    };
  },
  computed: {
    courses(){
      return this.$store.getters.getCourses;
    }
  },
  created(){
    this.$store.dispatch("pullCourses").then(()=> this.coursesLoaded = true)
  }
};
</script>
