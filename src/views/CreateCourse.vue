<template>
  <content-wrapper :title="`Create Course`">
    <course-creator @course-created="onCourseCreated($event)" />
    <course-lecture-creator v-if="startSectionCreation" @sections-created="onSectionsCreated($event)" />
    <button class="bg-green-300 hover:bg-green-700 px-4 py-2" @click="onClickSubmitCourse">Submit Course</button>
  </content-wrapper>
</template>

<script>
import ContentWrapper from "../components/ContentWrapper.vue";
import CourseCreator from "../components/createcourse/CourseCreator.vue";
import CourseLectureCreator from "../components/createcourse/CourseLectureCreator.vue";
import {addCourse} from "../firebase"

export default {
  components: { ContentWrapper, CourseLectureCreator, CourseCreator },
  methods: {
    onCourseCreated(event) {
      this.course.courseInfo = event;
      this.startSectionCreation = true;
    },
    onSectionsCreated(event) {
      console.log(event)
      this.course.sections = event;
    },
    onClickSubmitCourse(){
      addCourse(this.course)
      alert("Course was submitted. Check DB to confirm")
    }
  },
  data() {
    return {
      startSectionCreation: false,
      course: {
        courseInfo: {},
        sections: {},
      },
    }
  },
}
</script>

<style></style>
