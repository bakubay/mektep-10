<template>
  <content-wrapper :title="`Create Course`">
      <course-creator />
  </content-wrapper>
</template>

<script>
import ContentWrapper from '../components/ContentWrapper.vue'
import CourseCreator from '../components/createcourse/CourseCreator.vue'

export default {
  components: { ContentWrapper, CourseCreator },

}
</script>

<style>

</style>