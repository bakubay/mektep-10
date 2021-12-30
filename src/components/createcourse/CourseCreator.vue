<template>
  <div class="flex">
    <div class="flex flex-col w-full min-h-full py-2 my-4">
      <div class="text-lg font-bold text-center mb-2">Enter course information</div>
      <form action="" method="post" @submit.prevent>
        <div class="flex flex-col border-2 shadow-md px-10 h-auto py-4">
          <div class="flex items-center">
            <div class="w-full flex py-3 items-center space-x-2">
              <label class="font-semibold leading-none w-1/6">Course Name</label>
              <input required :disabled="isDisabled" v-model="courseName" type="text" :class="inputStyle" />
            </div>
          </div>
          <div class="flex items-center">
            <div class="w-full flex py-3 items-center space-x-2">
              <label class="font-semibold leading-none w-1/6">Image</label>
              <input :disabled="isDisabled" v-model="courseImageUrl" type="text" :class="inputStyle" />
            </div>
          </div>
          <div class="flex items-center">
            <div class="w-full flex space-x-2 pt-3">
              <label class="font-semibold leading-none w-1/6">Category</label>
              <input :disabled="isDisabled" v-model="courseCategory" type="text" :class="inputStyle" />
            </div>
          </div>
          <div class="flex items-center">
            <div class="w-full flex space-x-2 pt-3">
              <label class="font-semibold leading-none w-1/6">Description</label>
              <textarea :disabled="isDisabled" v-model="courseDescription" type="text" name="course-description" rows="5" cols="30" :class="inputStyle"></textarea>
            </div>
          </div>
          <div class="flex mt-4 w-full justify-between">
            <button v-if="isDisabled == false" @click.prevent="onSaveCreateCourse" class="p-3 w-32 bg-green-500 hover:bg-green-300 rounded text-white">Save</button>
            <button v-if="isDisabled == true" @click.prevent="editCourseInfo" class="p-3 w-32 bg-yellow-500 hover:bg-yellow-300 rounded text-white">Edit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import slugify from 'slugify';
export default {
  methods: {
    onSaveCreateCourse() {
        let courseInfo = {
          courseId: "id-" + Date.now()+ "-" + slugify(this.courseName),
          courseName: this.courseName,
          courseSlug: slugify("afsd asdf afa fadfs"),
          courseDescription: this.courseDescription,
          courseImageUrl: this.courseImageUrl,
          courseCategory: this.courseCategory,
        };
        this.$emit("course-created", courseInfo);
        this.isDisabled = true;
    },
    editCourseInfo() {
      this.isDisabled = false;
    },
  },
  data() {
    return {
      isDisabled: false,
      courseId: "",
      courseName: "",
      courseDescription: "",
      courseImageUrl: "",
      courseCategory: "",
    };
  },
  computed: {
    inputStyle() {
      return "flex-1 leading-none text-gray-900 p-3 focus:outline-none focus:border-green-700 border rounded border-gray-200 " + (this.isDisabled ? "bg-gray-100" : "bg-white");
    },
  },
};
</script>
