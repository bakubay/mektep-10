<template>
  <div class="flex">
    <sidebar :items="items"/>
    <content-wrapper :title="$route.params.category">
      <CourseListing :coursesList="items" />
    </content-wrapper>
  </div>
</template>

<script>
import CourseListing from "../components/CourseListing.vue";
import ContentWrapper from "../components/ContentWrapper.vue";
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "Browse",
  components: { CourseListing, ContentWrapper, Sidebar},
  data() {
    return {
    };
  },
};
</script>
