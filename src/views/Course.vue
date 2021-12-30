<template>
  <div class="flex">
    <content-wrapper :title="$route.params.name">
      <div class="flex justify-between p-4 bg-blue-50">
        <div class="flex-1">Description:</div>
        <div class="w-1/3">
            <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/1200px-Coursera-Logo_600x600.svg.png" width="512" height="512"/>
        </div>
      </div>
      <label>Table of content</label><br />
      <div class="flex flex-col p-2 max-w-lg">
        <router-link
          :to="this.$route.path + `/` + section.courseUrl"
          v-for="(section, index) in sections"
          :key="index"
          >{{ section }}</router-link
        >
      </div>
      <button class="px-4 py-2 bg-green-100 hover:bg-green-500">Start</button>
    </content-wrapper>
  </div>
</template>

<script>
import ContentWrapper from "../components/ContentWrapper.vue";
export default {
  components: { ContentWrapper },
  data() {
    return {
      currentSection: null,
      sections: [
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
};
</script>
