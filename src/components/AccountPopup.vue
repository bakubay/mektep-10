<template>
  <div>
    <div class="px-2 w-screen md:w-48">
      <div class="bg-white shadow-lg border-t-2 border-green-100 flex flex-col px-6 py-4">
        <XIcon @click="onCloseAccountPopup" class="w-4 h-4 cursor-pointer text-gray-400 hover:text-gray-600 justify-items-end ml-auto" />
        <p class="text-green-500">Hi, {{ this.$store.state.profileFirstName }}</p>
        <div class="py-4 flex flex-col gap-3">
          <router-link :to="{ name: 'Profile' }">User Home</router-link>
          <!-- <router-link :to="{ name: 'Profile' }">Settings</router-link> -->
          <div @click="signOut"><button>Log Out</button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { XIcon } from "@heroicons/vue/solid";
import { getAuth } from '@firebase/auth';
export default {
  components: { XIcon },
  methods: {
    onCloseAccountPopup() {
      this.$emit("close-account-popup");
    },
    signOut() {
      const auth  = getAuth()
      auth.signOut()
      window.location.reload()
    },
  },
};
</script>

<style></style>
