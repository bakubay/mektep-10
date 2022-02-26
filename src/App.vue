<template>
  <div class="flex flex-col">
    <TopNav />
    <Body>
      <router-view />
    </Body>
    <Footer />
  </div>
</template>

<script>
import Body from "./components/Body.vue";
import TopNav from "./components/TopNav.vue";
import Footer from "./components/Footer.vue";
import { getAuth } from '@firebase/auth';
export default {
  components: {
    TopNav,
    Body,
    Footer,
  },
  created() {
    const auth = getAuth()
    console.log(auth.currentUser)
  },
};
</script>
