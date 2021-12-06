<template>
  <div class="flex">
    <div class="flex flex-col w-full min-h-full py-2 my-4">
      <div class="text-base">Here you can create courses by addingn sections and content.</div>
      <course-lecture-creator-form v-for="(section, index) of courseSections" :key="section.id" :index="index" @section-saved="saveSession" />
      <div class="flex mt-4 w-full justify-between">
        <button @click="addSection" class="px-3 w-15 bg-green-200 hover:bg-blue-300">+</button>
        <button @click="onSumbit" class="p-3 w-32 bg-green-500 hover:bg-green-300 rounded">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import CourseLectureCreatorForm from "../createcourse/CourseLectureCreatorForm.vue";
import { ref } from "vue";
export default {
  components: { CourseLectureCreatorForm },
  setup() {
    let uuid = 1;
    let courseSections = ref([
      {
        id: uuid,
        title: "",
        url: "",
        description: "",
      },
    ]);
    const addSection = () => {
      uuid++;
      courseSections.value.push({
        id: uuid,
        title: "",
        url: "",
        description: "",
      });
      console.log(uuid);
      setTimeout(() => {
        scrollBy({
          top: 500,
          behavior: "smooth",
        });
      });
    };
    const saveSession = () => {};
    return {
      addSection,
      saveSession,
      courseSections,
      uuid,
    };
  },
};
</script>

<style></style>
