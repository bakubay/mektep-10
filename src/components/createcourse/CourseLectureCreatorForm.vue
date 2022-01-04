<template>
  <div class="flex flex-col w-auto mt-4 mx-10 h-auto">
    <form @submit.prevent>
      <div class="flex flex-col bg-gray-50 shadow-md px-10 h-auto py-4">
        <h1 class="text-gray-500">Section {{ index + 1 }}</h1>
        <div class="flex items-center">
          <div class="w-full flex py-3 items-center space-x-2">
            <label class="font-semibold leading-none w-1/6">Title</label>
            <input :disabled="isDisabled" v-model="sectionData.sectionTitle" type="text" :class="inputStyle" />
          </div>
        </div>
        <div class="flex items-center">
          <div class="w-full flex py-3 items-center space-x-2">
            <label class="font-semibold leading-none w-1/6">Video Embed Url</label>
            <input :disabled="isDisabled" v-model="sectionData.sectionVideoUrl" type="text" :class="inputStyle" />
          </div>
        </div>
        <div class="flex items-center">
          <div class="w-full flex space-x-2 pt-3">
            <label class="font-semibold leading-none w-1/6">Description</label>
            <textarea :disabled="isDisabled" v-model="sectionData.sectionDescription" type="text" name="course-description" rows="5" cols="30" :class="inputStyle"></textarea>
          </div>
        </div>
        <div class="flex items-center">
          <div class="w-full flex space-x-2 pt-3">
            <label class="font-semibold leading-none w-1/6">Additional Resources</label>
            <textarea :disabled="isDisabled" v-model="sectionData.sectionAddRes" type="text" name="course-description" rows="2" cols="30" :class="inputStyle"></textarea>
          </div>
        </div>
        <div class="flex items-center w-full justify-end space-x-1">
          <button @click.prevent="onRemoveSection" class="mt-4 leading-none py-4 px-4 bg-gray-300 rounded hover:bg-gray-400">
            <trash-icon class="w-4 h-4" />
          </button>
          <button v-if="isDisabled == false" @click.prevent="onSaveSection" class="mt-4 font-semibold leading-none text-white py-4 px-10 bg-green-500 rounded hover:bg-green-300">Save</button>
          <button v-if="isDisabled == true" @click.prevent="onEditSection" class="mt-4 font-semibold leading-none text-white py-4 px-10 bg-yellow-500 rounded hover:bg-yellow-300">Edit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { TrashIcon } from "@heroicons/vue/outline";
import slugify from 'slugify';
export default {
  components: { TrashIcon },
  props: ["index"],
  emits: ["section-saved", "remove-section"],
  methods: {
    onSaveSection() {
      this.sectionData.sectionSlug = slugify(this.sectionData.sectionTitle)
      this.$emit("section-saved", this.sectionData);
      this.isDisabled = true;
      this.sectionData.sectionIndex = this.index;
    },
    onRemoveSection() {
      this.$emit("remove-section");
    },
    onEditSection() {
      this.isDisabled = false;
    },
  },
  computed: {
    inputStyle() {
      return "flex-1 leading-none text-gray-900 p-3 focus:outline-none focus:border-green-700 border rounded border-gray-200 " + (this.isDisabled ? "bg-gray-100" : "bg-white");
    },
  },
  data() {
    return {
      isDisabled: false,
    };
  },
  setup() {
    const sectionData = {
      sectionTitle: "",
      sectionIndex: "",
      sectionSlug: "",
      sectionVideoUrl: "",
      sectionDescription: "",
      sectionAddRes: "",
    };
    return {
      sectionData,
    };
  },
};
</script>

<style></style>
