<template>
  <div class="flex flex-col p-2 border-green-400">
    <course-video />
    <div class="flex w-full h-full mt-5 justify-between text-xl">
      <button class="bg-green-200 p-3 w-12 hover:bg-green-300">
        <span>←</span>
      </button>
      <button class="bg-green-200 p-3 w-12 hover:bg-green-300">
        <span>→</span>
      </button>
    </div>
    <div class="flex justify-center h-52 border-2 mt-6 p-2 bg-green-100">
        <h1 class="text-xl ">Quiz</h1>
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
