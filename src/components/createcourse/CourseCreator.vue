<template>
  <div class="flex">
    <div class="flex flex-col w-full min-h-full py-2 my-4">
      <div class="text-xl font-bold text-center mb-2">Enter course information</div>
      <form action="" method="post" @submit.prevent>
        <div class="flex flex-col border-2 shadow-md px-10 h-auto py-4">
          <h1 class="text-gray-500"></h1>
          <div class="flex items-center">
            <div class="w-full flex py-3 items-center space-x-2">
              <label class="font-semibold leading-none w-1/6">Course Name</label>
              <input v-model="courseName" type="text" class="flex-1 leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 bg-gray-100 border rounded border-gray-200" />
            </div>
          </div>
          <div class="flex items-center">
            <div class="w-full flex py-3 items-center space-x-2">
              <label class="font-semibold leading-none w-1/6">Image</label>
              <input v-model="courseImageUrl" type="text" class="flex-1 leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 bg-gray-100 border rounded border-gray-200" />
            </div>
          </div>
          <div class="flex items-center">
            <div class="w-full flex space-x-2 pt-3">
              <label class="font-semibold leading-none w-1/6">Category</label>
              <input v-model="courseCategory" type="text" class="flex-1 leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 bg-gray-100 border rounded border-gray-200" />
            </div>
          </div>
          <div class="flex items-center">
            <div class="w-full flex space-x-2 pt-3">
              <label class="font-semibold leading-none w-1/6">Description</label>
              <textarea
                v-model="courseDescription"
                type="text"
                name="course-description"
                rows="5"
                cols="30"
                class="flex-1 leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 bg-gray-100 border rounded border-gray-200"
              ></textarea>
            </div>
          </div>
          <div class="flex mt-4 w-full justify-between">
            <button @click.prevent="onSumbitCreateCourse" class="p-3 w-32 bg-green-500 hover:bg-green-300 rounded">Create</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onSumbitCreateCourse() {
      let courseInfo = {
        courseId: "id-" + Date.now() + this.courseName.toLowerCase().split(" ").join("-"),
        courseName : this.courseName,
        courseDescription: this.courseDescription,
        courseImageUrl: this.courseImageUrl,
        courseCategory: this.courseCategory
      }
      this.$emit("course-created", courseInfo);
    },
  },
  data() {
    return {
      courseId: "",
      courseName: "",
      courseDescription: "",
      courseImageUrl: "",
      courseCategory: "",
    }
  }
};
</script>
