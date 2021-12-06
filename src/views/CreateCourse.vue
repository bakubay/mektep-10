<template>
  <content-wrapper :title="`Create Course`">
      <course-creator />
      <course-lecture-creator />
  </content-wrapper>
</template>

<script>
import ContentWrapper from '../components/ContentWrapper.vue'
import CourseCreator from '../components/createcourse/CourseCreator.vue'
import CourseLectureCreator from '../components/createcourse/CourseLectureCreator.vue'

export default {
  components: { ContentWrapper, CourseLectureCreator, CourseCreator },

}
</script>

<style>

</style>