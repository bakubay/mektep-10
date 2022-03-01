<template>
  <div class="w-full">
    <Modal v-if="showModal" :modal-message="this.modalMessage" @close-modal="showModal = false"/>
    <div class="mx-auto px-2 md:max-w-md">
      <div class="bg-white shadow-lg border-t-2 border-green-100 flex flex-col px-6 py-4 justify-center items-center">
        <h2>Reset Password</h2>
        <form class="my-2 flex flex-col gap-2 w-full px-4">
          <input placeholder="Email" v-model="email" type="text" class="flex-1 leading-none text-gray-900 p-3 focus:outline-none focus:border-green-200 border rounded border-gray-200" />
        </form>
        <div class="w-full px-4 mt-4">
          <button @click="resetPassword" class="w-full py-2 bg-green-200 hover:bg-green-100 text-gray-700">Reset</button>
        </div>
        <router-link :to="{ name: 'Login' }" class="text-sm text-green-500 hover:text-green-200 mt-6">Go back?</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import "firebaseui/dist/firebaseui.css";
import Modal from "../components/Modal.vue";

export default {
  components: { Modal },
  data() {
    return {
      email: null,

      showModal: true,
      modalMessage: "sheesh",
    };
  },
  methods: {
      resetPassword(){}
  },
};
</script>

<style></style>
