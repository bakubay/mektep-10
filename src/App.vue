<template>
  <div class="flex flex-col">
    <TopNav />
    <Body>
      <router-view :key="$route.path" />
    </Body>
    <Footer />
  </div>
</template>

<script>
import Body from "./components/Body.vue";
import TopNav from "./components/TopNav.vue";
import Footer from "./components/Footer.vue";
import { getAuth, onAuthStateChanged } from '@firebase/auth';
export default {
  components: {
    TopNav,
    Body,
    Footer,
  },
  created() {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      this.$store.commit('UPDATE_USER', user);
      if(user){
        this.$store.dispatch('getCurrentUser');
      }
    })
    console.log(auth.currentUser)
  },
};
</script>
