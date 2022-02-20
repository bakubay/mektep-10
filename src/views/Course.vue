<template>
  <div class="flex" v-if="currentCourse && showSections">
    <sidebar :sections="currentCourse.courseSections"/>
    <content-wrapper :title="currentCourse.courseName">
      <div class="flex flex-col-reverse md:flex-row mt-4 justify-between py-4">
        <div class="flex-1 mr-4">
          <h3 class="font-bold">Description:</h3>
          <p>{{currentCourse.courseDescription}}</p>
          <br />
          </div>
        <div class="w-full flex flex-col md:w-1/3 rounded-md items-center">
          <img
            class="w-36 h-36 md:w-full md:h-auto md:rounded-none rounded-full"
            :src="currentCourse.courseImageUrl"
          />
          <!-- :src="currentCourse.imageUrl" -->
          <router-link
          :to="{name: 'Section', params: {sectionId: 1}}" 
          class="w-full px-6 py-2 mt-2 bg-green-100 hover:bg-green-500 text-center"
          >Start</router-link>
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
      showSections: false
    }
  },
  computed: {
    currentCourse(){
      return this.$store.getters.getCourseById(this.$route.params.courseId);
    },
  },
  async created(){
    if(!this.currentCourse){
      await this.$store.dispatch("pullCourse", this.$route.params.courseId).then(() =>{})
    }
    this.$store.dispatch("pullCourseSections", this.$route.params.courseId).then(( ) =>{
      this.showSections = true
      }
    );
  }
};

</script>
