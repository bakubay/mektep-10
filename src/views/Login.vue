<template>
  <div class="w-full">
    <div class="mx-auto px-2 md:max-w-md">
      <div class="bg-white shadow-lg border-t-2 border-green-100 flex flex-col px-6 py-4 justify-center items-center">
        <h2>Log in</h2>
        <div class="w-full" id="firebaseui-auth-container"></div>
        <form class="my-2 flex flex-col gap-2 w-full px-4">
          <input :class="v$.email.$invalid ? 'focus:border-red-500' : 'focus:border-green-200'" placeholder="Email" v-model="email" type="text" class="flex-1 leading-none text-gray-900 p-3 focus:outline-none border rounded border-gray-200" />
          <input :class="v$.password.$invalid ? 'focus:border-red-500' : 'focus:border-green-200'" placeholder="Password" v-model="password" type="text" class="flex-1 leading-none text-gray-900 p-3 focus:outline-none border rounded border-gray-200" />
          <span class="text-red-500 text-sm" v-if="error">Email or Password incorrect</span>
        </form>
        <div class="w-full px-4 mt-4">
          <router-link :to="{ name: 'ForgotPassword' }" class="text-sm text-green-500 hover:text-green-200">Forgot Password?</router-link>
          <button @click="signin" class="w-full py-2 bg-green-200 hover:bg-green-100 text-gray-700">Sign in</button>
        </div>
        <router-link :to="{ name: 'Register' }" class="text-sm text-green-500 hover:text-green-200 mt-6">Not registered?</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      email: "",
      password: "",
      errorMsg: "",
      error: false,
    };
  },
  validations() {
    return {
      email: { required, email }, // Matches this.contact.email
      password: { required, minLength: minLength(6) },
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
    async signin() {
      const auth = getAuth();
      const isFormCorrect = await this.v$.$validate()
      if (isFormCorrect) {
        signInWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            this.$router.push({ path: "/" });
            console.log(userCredential.user);
          })
          .catch((err) => {
            this.error = true;
            this.errorMsg = err.message;
          });
      } else {
        alert("Form failed validation");
      }
    },
  },
};
</script>

<style></style>
