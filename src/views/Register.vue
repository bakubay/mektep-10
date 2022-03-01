<template>
  <div class="w-full">
    <div class="mx-auto px-2 md:max-w-md">
      <div class="bg-white shadow-lg border-t-2 border-green-100 flex flex-col px-6 py-4 justify-center items-center">
        <h2>Create account</h2>
        <div class="w-full" id="firebaseui-auth-container"></div>
        <form class="my-2 flex flex-col gap-2 w-full px-4">
          <input required placeholder="First Name" v-model="firstName" type="text" class="flex-1 leading-none text-gray-900 p-3 focus:outline-none focus:border-green-200 border rounded border-gray-200" />
          <input required placeholder="Last Name" v-model="lastName" type="text" class="flex-1 leading-none text-gray-900 p-3 focus:outline-none focus:border-green-200 border rounded border-gray-200" />

          <input :class="v$.email.$invalid ? 'focus:border-red-500' : 'focus:border-green-200'" required placeholder="Email" v-model="email" type="text" class="flex-1 leading-none text-gray-900 p-3 focus:outline-none border rounded border-gray-200" />
          <span class="text-red-500 text-sm" v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</span>

          <input :class="v$.password.$invalid ? 'focus:border-red-500' : 'focus:border-green-200'" required placeholder="Password(at least 8 characters)" v-model="password" minlength="8" type="password" class="flex-1 leading-none text-gray-900 p-3 focus:outline-none border rounded border-gray-200" />
          <span class="text-red-500 text-sm" v-if="v$.password.$error">{{ v$.password.$errors[0].$message }}</span>
        </form>
        <div class="w-full px-4 mt-4">
          <button @click="register" class="w-full py-2 bg-green-200 hover:bg-green-100 text-gray-700">Register</button>
        </div>
        <router-link :to="{ name: 'Login' }" class="text-sm text-green-500 hover:text-green-200 mt-6">Have account?</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider } from "firebase/auth";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { getFirestore, doc, setDoc } from "firebase/firestore";
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
      firstName: "",
      lastName: "",
    };
  },
  validations() {
    return {
      firstName: { required }, // Matches this.firstName
      lastName: { required }, // Matches this.lastName
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
    async register() {
      this.v$.$validate(); // checks all inputs
      if (!this.v$.$error) {
        // if ANY fail validation
        const db = getFirestore();
        const firebaseAuth = await getAuth();
        const createUser = await createUserWithEmailAndPassword(firebaseAuth, this.email, this.password);
        const result = createUser;
        const userRef = doc(db, "users", result.user.uid);
        await setDoc(userRef, {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
        });
        alert("Registered");
        this.$router.push({ path: "/" });
        return;
      } else {
        alert("Form failed validation");
      }
    },
  },
};
</script>

<style></style>
