<template>
  <div class="flex">
    <div class="flex flex-col w-full min-h-full py-2 my-4">
      <div class="text-base">Here you can create courses by addingn sections and content.</div>
      <course-lecture-creator-form v-for="(section, index) of courseSections" :key="section.id" :index="index" @section-saved="saveSession($event, section)"  @remove-section="removeSession(index)"/>
      <div class="flex mt-4 w-full justify-between">
        <button @click="addSection" class="px-3 w-15 bg-green-200 hover:bg-blue-300">+</button>
        <button @click="onSectionsCreated" class="p-3 w-32 bg-green-500 hover:bg-green-300 rounded">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import CourseLectureCreatorForm from "../createcourse/CourseLectureCreatorForm.vue";
import { ref } from "vue";
export default {
  components: { CourseLectureCreatorForm },
  methods: {
    onSectionsCreated(){
      this.$emit("sections-created", this.courseSections)
    }
  },
  setup() {
    let uuid = 1;
    let courseSections = ref([
      {
        id: "section-id-" + uuid,
        title: "",
        url: "",
        description: "",
        addRes: "",
      },
    ]);
    const addSection = () => {
      uuid++;
      courseSections.value.push({
        id: "section-id-" + uuid,
        title: "",
        url: "",
        description: "",
        addRes: "",
      });
      setTimeout(() => {
        scrollBy({
          top: 500,
          behavior: "smooth",
        });
      });
    };
    const saveSession = (event, section) => {
      section.title = event.sectionTitle;
      section.url = event.sectionVideoUrl;
      section.description = event.sectionDescription;
      section.addRes = event.sectionAddRes;
    };
    const removeSession = (index) => {
      courseSections.value.splice(index, 1);
    }
    return {
      addSection,
      saveSession,
      removeSession,
      courseSections,
      uuid,
    };
  },
};
</script>

<style></style>
