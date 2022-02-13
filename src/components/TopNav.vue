<template>
  <div class="sticky top-0 flex z-50 bg-white h-16 border-b-2 border-gray-100">
    <div class="grid grid-cols-3 gap-4 items-center p-2 md-5 w-full">
      <div class="flex gap-x-2 md:gap-x-5 items-center justify-start ml-2 md:ml-4">
        <button v-if="this.$route.name == 'Section' || this.$route.name == 'Course'" @click.stop="toggleMobileMenu">
          <menu-alt2-icon class="h-6 w-6 mr-4 text-gray-400 hover:text-gray-700 lg:hidden" />
        </button>
        <div @click.stop="toggleDropdown" class="flex text-gray-400 md:text-base text-sm hover:text-gray-700 items-center">
          <label>Қара</label>
          <chevron-down-icon class="h-3 w-3 mt-0.5 transform transition-transform" :class="isDropdownActive ? 'rotate-180' : 'rotate-0'" />
        </div>
      </div>
      <div class="flex justify-center">
        <router-link :to="{ name: 'Home' }" class="font-semibold md:text-2xl text-gray-700">Mektep<span class="text-green-400">10</span></router-link>
      </div>
      <div class="flex gap-x-2 md:gap-x-5 items-center justify-end mr-2 md:mr-4">
        <button @click.stop="toggleLoginPopup" class="text-gray-400 md:text-base text-sm hover:text-gray-700">Log in</button>
        <router-link class="text-gray-400 md:text-base text-sm hover:text-gray-700" to="/about">About</router-link>
      </div>
    </div>
  </div>
  <div v-if="isDropdownActive" v-click-outside="disableDropdown" class="absolute z-50 top-16 w-screen md:ml-4 px-6 py-4 mt-1 md:max-w-sm shadow-lg bg-white border-t-2 border-green-100">
    <div class="flex flex-col text-md md:text-base leading-6">
      <ul>
        <li>Arts</li>
        <li>Shmarts</li>
        <li>Brats</li>
        <li>Grots</li>
        <li>Shmorts</li>
      </ul>
    </div>
  </div>
  <login-popup v-if="isLoginPopupActive" v-click-outside="disableLoginPopup" @close-login-popup="disableLoginPopup" class="fixed right-0 mt-12 z-50" />
</template>

<script>
import { MenuAlt2Icon, ChevronDownIcon } from "@heroicons/vue/outline";
import LoginPopup from "./LoginPopup.vue";

export default {
  components: { MenuAlt2Icon, ChevronDownIcon, LoginPopup },
  methods: {
    toggleMobileMenu() {
      this.$store.commit("toggleMobileMenu");
      console.log("Clicked toggle mobile menu")
    },
    toggleLoginPopup() {
      this.isLoginPopupActive = !this.isLoginPopupActive;
    },
    disableLoginPopup() {
      this.isLoginPopupActive = false;
    },
    toggleDropdown() {
      this.isDropdownActive = !this.isDropdownActive;
    },
    disableDropdown() {
      this.isDropdownActive = false;
      console.log(this.isDropdownActive);
    },
  },
  data() {
    return {
      isLoginPopupActive: false,
      isDropdownActive: false,
    };
  },
};
</script>
