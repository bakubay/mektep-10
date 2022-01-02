<template>
<div class="flex flex-col h-screen">
    <TopNav />
    <Body>
        <router-view />
    </Body>
    <Footer />
</div>
</template>

<script>
import Body from './components/Body.vue';
import TopNav from "./components/TopNav.vue";
import Footer from "./components/Footer.vue"
export default {
  components: {
    TopNav,
    Body,
    Footer
  },
};
</script>
