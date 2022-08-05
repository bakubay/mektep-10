<template>
    <div class="flex">
        <content-wrapper :title="`My Courses`">
        <CourseListing :coursesList="courses"/>
        </content-wrapper>
    </div>
</template>

<script>
import ContentWrapper from '../components/ContentWrapper.vue';
import CourseListing from '../components/CourseListing.vue';

export default {
  components: { ContentWrapper, CourseListing },
  data(){
      return {
          items: [{title: 'My Courses', index: 1}, {title: 'Settings',index: 2}]
      }
  },
    computed: {
        userFullName() {
            return this.$store.state.profileFirstName + " " + this.$store.state.profileLastName
        },
        user() {
            return this.$store.state.user;
        },
        courses(){
            return this.$store.state.userCourses;
        }
    }
}
</script>

<style>

</style>