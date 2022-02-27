<template>
  <!-- courses table -->
  <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
    <div v-for="(item, i) in coursesList" :key="i" class="flex w-full ">
      <!-- course table card -->
      <router-link :to="{ name: 'Course', params: { courseId: item.courseId } }" class="w-full flex justify-center">
        <div class="w-72 h-72 min-w-full min-w-min overflow-hidden rounded-lg flex flex-col shadow-lg hover:opacity-50">
          <section class="h-2/3 bg-green-50 flex overflow-hidden">
            <img class="object-cover w-full" v-if="item.courseImageUrl.length > 0" :src="item.courseImageUrl" />
          </section>
          <div class="text-sm">
            <div class="flex justify-between mx-1 mt-1 text-gray-500">
              <div class="">JalagashIT</div>
              <div class="rounded-md bg-green-100 px-2">IT</div>
            </div>
            <div class="flex flex-1 mx-1 my-1 text-sm ">
              <b>{{ item.courseName }}</b>
            </div>
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
