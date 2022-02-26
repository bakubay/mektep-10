<template>
  <div>
    <div class="px-2 w-screen md:max-w-md">
      <div class="bg-white shadow-lg border-t-2 border-green-100 flex flex-col px-6 py-4 justify-center items-center">
        <XIcon @click="onCloseLoginPopup" class="w-4 h-4 cursor-pointer text-gray-400 hover:text-gray-600 justify-items-end ml-auto" />
        <h2>Log in</h2>
        <div class="w-full" id="firebaseui-auth-container"></div>
        <form class="mt-2 flex flex-col gap-2 w-full px-4">
          <input placeholder="Email" v-model="email" type="text" class="flex-1 leading-none text-gray-900 p-3 focus:outline-none focus:border-green-200 border rounded border-gray-200" />
          <input placeholder="Password" v-model="password" type="text" class="flex-1 leading-none text-gray-900 p-3 focus:outline-none focus:border-green-200 border rounded border-gray-200" />
        </form>
        <div class="w-full px-4 mt-4">
          <router-link :to="{ name: 'ForgotPassword' }" class="text-sm text-green-500 hover:text-green-200">Forgot Password?</router-link>
          <button class="w-full py-2 bg-green-200 hover:bg-green-100 text-gray-700">Sign in</button>
        </div>
        <router-link :to="{ name: 'Register' }" class="text-sm text-green-500 hover:text-green-200 mt-6">Not registered?</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { XIcon } from "@heroicons/vue/solid";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

export default {
  components: { XIcon },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  mounted() {
    var auth = getAuth();
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(auth);
    }
    var uiConfig = {
      signInSuccessUrl: "/",
      signInOptions: [GoogleAuthProvider.PROVIDER_ID],
    };
    ui.start("#firebaseui-auth-container", uiConfig);
  },
  methods: {
    onCloseLoginPopup() {
      this.$emit("close-login-popup");
    },
  },
};
</script>

<style></style>
