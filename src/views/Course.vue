<template>
  <div class="flex">
      <sidebar />
      <content-wrapper :title="$route.params.name">
          <course-content-area />
      </content-wrapper>
  </div>
</template>

<script>
import ContentWrapper from '../components/ContentWrapper.vue'
import Sidebar from '../components/Sidebar.vue'
import CourseContentArea from '../components/CourseContentArea.vue'
export default {
  components: { Sidebar , ContentWrapper, CourseContentArea},

}
</script>