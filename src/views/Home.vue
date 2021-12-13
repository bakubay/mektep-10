<template>
  <div class="flex">
    <sidebar :items="items"/>
    <content-wrapper :title="`All courses`">
      <CourseListing :coursesList="items" />
    </content-wrapper>
  </div>
</template>

<script>
import CourseListing from "../components/CourseListing.vue";
import ContentWrapper from "../components/ContentWrapper.vue";
import Sidebar from "../components/Sidebar.vue";
import { logstuff } from "../firebase"

export default {
  name: "Home",
  components: { CourseListing, ContentWrapper, Sidebar},
  data() {
    return {
      items: [
        {
          courseName: "Math for beginners",
          courseUrl: "google.com",
        },
        {
          courseName: "Biology I",
          courseUrl: "blahblahblah",
        },
        {
          courseName: "Biology I",
          courseUrl: "blahblahblah",
        },
        {
          courseName: "Biology I",
          courseUrl: "blahblahblah",
        },
        {
          courseName: "Biology I",
          courseUrl: "blahblahblah",
        },
        {
          courseName: "Biology I",
          courseUrl: "blahblahblah",
        },
        {
          courseName: "Biology I",
          courseUrl: "blahblahblah",
        },
        {
          courseName: "Biology I",
          courseUrl: "blahblahblah",
        },
        {
          courseName: "Biology I",
          courseUrl: "blahblahblah",
        },
      ],
    };
  },
  setup(){
    logstuff()
  }
};
</script>
