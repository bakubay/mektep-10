<template>
  <div class="flex flex-col p-2 border-green-400">
    <course-video :video-url="`hello`"/>
  </div>
</template>

<script>
import CourseVideo from "./CourseVideo.vue";
export default {
  components: { CourseVideo },
  methods: {
    log(){
    }
  }
};
</script>

<style></style>
