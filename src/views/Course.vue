<template>
  <Spinner v-if="!currentCourse"/>
  <div class="flex" v-else>
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
          <router-link @click="subscribeUserToCourse"
          :to="{name: 'Section', params: {sectionId: 1}}" 
          class="w-full px-6 py-2 mt-2 bg-green-100 hover:bg-green-500 text-center">
            <label v-if="user">Start</label>
            <label v-else>View</label>
          </router-link>
        </div>
      </div>
    </content-wrapper>
  </div>
</template>

<script>
import ContentWrapper from "../components/ContentWrapper.vue";
import Sidebar from "../components/Sidebar.vue";
import Spinner from "../components/utils/Spinner.vue"
export default {
  components: { ContentWrapper, Sidebar, Spinner },
  data(){
    return {
    }
  },
  computed: {
    currentCourse(){
      return this.$store.getters.getCourseById(this.$route.params.courseId);
    },
    user(){
      return this.$store.state.user;
    }
  },
  methods:{
    subscribeUserToCourse() {
      if(this.user){
        this.$store.dispatch("subscribeUserToCourse", this.$route.params.courseId).then(() => alert("LEEETS  GOOO"));
      }
    },
    async initCourse() {
      if(!this.currentCourse){
       await this.$store.dispatch("pullCourse", this.$route.params.courseId).then((e) => {
         if(e == -1) { this.$router.push({ name: "NotFound" })}
        })
      }
    }
  },
  async created(){
    this.initCourse()
  }
}
</script>
