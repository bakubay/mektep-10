<template>
  <!-- courses table -->
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <div v-for="(item, i) in coursesList" :key="i" class="flex w-full justify-center">
      <!-- course table card -->
      <div class="w-52 min-w-min md:h-44 h-52 overflow-hidden rounded-lg flex flex-col shadow-lg hover:opacity-50">
        <div class="h-3/4 bg-green-50"></div>
        <div class="flex flex-1 items-center justify-center">
          {{ item.courseName }}
        </div>
      </div>
    </div>
  </div>
  <!-- pageinator -->
  <div class="mt-16 flex space-x-1 items-center justify-center">
    <a href="#" class="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-sm">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
      </svg>
    </a>
    <a href="#" class="px-4 py-2 text-gray-700 bg-gray-200 rounded-sm hover:bg-green-400 hover:text-white"> 1 </a>
    <a href="#" class="px-4 py-2 text-gray-700 bg-gray-200 rounded-sm hover:bg-blue-400 hover:text-white"> 2 </a>
    <a href="#" class="px-4 py-2 text-gray-700 bg-gray-200 rounded-sm hover:bg-blue-400 hover:text-white"> 3 </a>
    <a href="#" class="px-4 py-2 text-gray-500 bg-gray-300 rounded-sm hover:bg-blue-400 hover:text-white">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  props: ["coursesList"],
};
</script>

<style></style>
