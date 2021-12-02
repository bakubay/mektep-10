<template>
  <div class="flex flex-col">
    <course-video />
    <div class="flex w-full h-full mt-5 justify-between text-xl">
      <button class="bg-green-200 p-3 w-12 hover:bg-green-300">
        <span>←</span>
      </button>
      <button class="bg-green-200 p-3 w-12 hover:bg-green-300">
        <span>→</span>
      </button>
    </div>
  </div>
</template>

<script>
import CourseVideo from "./CourseVideo.vue";
export default {
  components: { CourseVideo },
};
</script>

<style></style>
