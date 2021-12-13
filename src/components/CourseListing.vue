<template>
  <!-- courses table -->
  <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
    <div v-for="(item, i) in coursesList" :key="i" class="flex w-full justify-center">
      <!-- course table card -->
      <router-link :to="`/course/` + item.courseUrl">
      <div class="w-72 h-72 min-w-min md:h-44 md:w-52 overflow-hidden rounded-lg flex flex-col shadow-lg hover:opacity-50">
        <div class="h-3/4 bg-green-50"></div>
        <div class="flex flex-1 items-center justify-center">
          {{ item.courseName }}
        </div>
      </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["coursesList"],
};
</script>

<style></style>
