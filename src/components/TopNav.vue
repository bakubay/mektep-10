<template>
  <div class="sticky top-0 flex z-50 bg-white h-16 border-b-2 border-gray-100">
    <div class="flex items-center p-5 justify-between w-full ">
      <div>
        <router-link
          :to="{ name: 'Home' }"
          class="font-semibold text-2xl text-gray-700"
          >Mektep<span class="text-green-400">10</span></router-link
        >
      </div>
      <div class="flex items-center"></div>
      <div class="flex gap-x-5 items-center">
        <button
          @click="showLoginPopup"
          class="text-gray-400 text-base hover:text-gray-700"
        >
          Log in
        </button>
        <router-link
          class="text-gray-400 text-base hover:text-gray-700"
          to="/about"
          >About</router-link
        >
      </div>
    </div>
  </div>
  <login-popup v-if="isLoginPopupActive" class="fixed right-0 mt-12 z-50"/>
</template>

<script>
import LoginPopup from './LoginPopup.vue';
export default {
  components: {LoginPopup},
  data() {
    return {
      isLoginPopupActive: false,
    };
  },
  methods: {
    showLoginPopup() {
      this.isLoginPopupActive = !this.isLoginPopupActive;
    },
  },
};
</script>
