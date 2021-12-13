<template>
  <div class="flex flex-col w-auto mt-10 mx-10 h-auto">
    <form @submit.prevent>
      <div class="flex flex-col bg-gray-50 shadow-md px-10 h-auto py-4">
        <h1 class="text-gray-500">Section {{ index + 1 }}</h1>
        <div class="flex items-center">
          <div class="w-full flex py-3 items-center space-x-2">
            <label class="font-semibold leading-none w-1/6">Title</label>
            <input v-model="sectionData.sectionTitle" type="text" class="flex-1 leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 bg-gray-100 border rounded border-gray-200" />
          </div>
        </div>
        <div class="flex items-center">
          <div class="w-full flex py-3 items-center space-x-2">
            <label class="font-semibold leading-none w-1/6">Video Embed Url</label>
            <input v-model="sectionData.sectionVideoUrl" type="text" class="flex-1 leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 bg-gray-100 border rounded border-gray-200" />
          </div>
        </div>
        <div class="flex items-center">
          <div class="w-full flex space-x-2 pt-3">
            <label class="font-semibold leading-none w-1/6">Description</label>
            <textarea
              v-model="sectionData.sectionDescription"
              type="text"
              name="course-description"
              rows="5"
              cols="30"
              class="flex-1 leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 bg-gray-100 border rounded border-gray-200"
            ></textarea>
          </div>
        </div>
        <div class="flex items-center">
          <div class="w-full flex space-x-2 pt-3">
            <label class="font-semibold leading-none w-1/6">Additional Resources</label>
            <textarea
              v-model="sectionData.sectionAddRes"
              type="text"
              name="course-description"
              rows="2"
              cols="30"
              class="flex-1 leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 bg-gray-100 border rounded border-gray-200"
            ></textarea>
          </div>
        </div>
        <div class="flex items-center w-full justify-end space-x-1">
          <button 
            @click.prevent="onRemoveSection"
            class="mt-4 leading-none py-4 px-4 bg-gray-300 rounded hover:bg-blue-600">
            <trash-icon class="w-4 h-4"/>
          </button>
          <button 
            @click.prevent="onSaveSection"
            class="mt-4 font-semibold leading-none text-white py-4 px-10 bg-green-700 rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { TrashIcon } from "@heroicons/vue/outline";
export default {
  components: {TrashIcon},
  props: ["index", "courseSection"],
  emits: ["section-saved", "remove-section"],
  methods: {
    onSaveSection(){
      this.$emit("section-saved", this.sectionData)
    },
    onRemoveSection(){
      this.$emit("remove-section")
    }
  },
  setup() {
    const sectionData = {
      sectionTitle: "",
      sectionVideoUrl: "",
      sectionDescription: "",
      sectionAddRes: "",
    };
    return {
      sectionData,
    };
  },
}
</script>

<style></style>
