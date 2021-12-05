<template>
  <div class="flex flex-col w-auto mt-10 mx-10 h-auto">
    <form action="" method="post">
      <div class="flex flex-col bg-gray-50 px-10 h-auto rounded-lg py-4">
        <h1 class="text-gray-500">Section {{ index + 1 }}</h1>
        <div class="flex items-center">
          <div class="w-full flex py-3 items-center space-x-2">
            <label class="font-semibold leading-none w-1/6">Title</label>
            <input type="text" class="flex-1 leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 bg-gray-100 border rounded border-gray-200" />
          </div>
        </div>
        <div class="flex items-center">
          <div class="w-full flex py-3 items-center space-x-2">
            <label class="font-semibold leading-none w-1/6">Video Embed Url</label>
            <input type="text" class="flex-1 leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 bg-gray-100 border rounded border-gray-200" />
          </div>
        </div>
        <div class="flex items-center">
          <div class="w-full flex space-x-2 pt-3">
            <label class="font-semibold leading-none w-1/6">Description</label>
            <textarea
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
            @click="onSumbitSection"
            class="mt-4 leading-none py-4 px-10 bg-gray-300 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
          >
            Cancel
          </button>
          <button
            @click="onSumbitSection"
            class="mt-4 font-semibold leading-none text-white py-4 px-10 bg-green-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["index"],
  setup() {
    const onSumbitSection = () => {
      this.$emit("section-saved");
    };
    return {
      onSumbitSection,
    };
  },
};
</script>

<style></style>
