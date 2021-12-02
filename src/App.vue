<template>
    <TopNav />
    <div class="w-full h-full flex justify-center bg-gray-100 pt-3 pb-3">
      <div class="w-full max-w-7xl px-5 text-base">
        <router-view />
      </div>
    </div>
    <div class="flex w-full h-32 bg-gray-700"></div>
</template>

<script>
import TopNav from "./components/TopNav.vue";
export default {
  components: {
    TopNav,
  },
};
</script>
