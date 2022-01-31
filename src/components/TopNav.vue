<template>
  <div class="sticky top-0 flex z-50 bg-white h-16 border-b-2 border-gray-100">
    <div class="grid grid-cols-3 gap-4 items-center p-2 md-5 w-full">
      <div>
      <button v-if="this.$route.name=='Section' || this.$route.name=='Course'" @click="toggleMobileMenu">
        <MenuAlt2Icon class="h-6 w-6 mr-4 text-gray-700 hover:text-gray-400 lg:hidden" />
      </button>
      </div>
      <div class="flex justify-center">
        <router-link :to="{ name: 'Home' }" class="font-semibold md:text-2xl text-gray-700">Mektep<span class="text-green-400">10</span></router-link>
      </div>
      <div class="flex gap-x-2 md:gap-x-5 items-center justify-end mr-2 md:mr-4">
        <button @click="showLoginPopup" class="text-gray-400 md:text-base text-sm hover:text-gray-700">Log in</button>
        <router-link class="text-gray-400 md:text-base text-sm hover:text-gray-700" to="/about">About</router-link>
      </div>
    </div>
  </div>
  <login-popup v-if="isLoginPopupActive" v-click-outside="showLoginPopup" @close-login-popup="isLoginPopupActive=false" class="fixed right-0 mt-12 z-50" />
</template>

<script>
import { MenuAlt2Icon } from "@heroicons/vue/outline";
import LoginPopup from "./LoginPopup.vue";

export default {
  components: { MenuAlt2Icon, LoginPopup },
  methods: {
    toggleMobileMenu() {
      console.log("Show Mobile menu");
      this.$store.commit("toggleMobileMenu");
    },
    showLoginPopup() {
      this.isLoginPopupActive = !this.isLoginPopupActive;
      console.log(this.isLoginPopupActive);

    },
    printstuff(){
      console.log("asdfasdfasdf");
    }
  },
  data() {
    return {
      isLoginPopupActive: false,
    };
  },
};
</script>
