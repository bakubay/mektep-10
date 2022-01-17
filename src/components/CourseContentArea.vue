<template>
  <div class="flex flex-col p-2 border-green-400">
    <course-video :videoUrl="contentUrl"/>
  </div>
</template>

<script>
import CourseVideo from "./CourseVideo.vue";
export default {
  components: { CourseVideo },
  props: ["contentUrl"],
  methods: {
    log(){
    }
  }
};
</script>

<style></style>
