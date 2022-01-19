<template>
  <div>
    <div class="px-2 w-screen md:max-w-md">
    <div class="bg-white shadow-lg border-t-2 border-green-100 rounded-md flex flex-col px-6 py-4 justify-center items-center">
      <h2>Log in</h2>
      <form class="mt-2 flex flex-col gap-2 w-full px-4">
        <input placeholder="Email" v-model="email" type="text" class="flex-1 leading-none text-gray-900 p-3 focus:outline-none focus:border-green-200 border rounded border-gray-200" />
        <input placeholder="Password" v-model="password" type="text" class="flex-1 leading-none text-gray-900 p-3 focus:outline-none focus:border-green-200 border rounded border-gray-200"/>
      </form>
      <button class="mt-2 px-4 py-2 bg-green-200 hover:bg-green-100 rounded-md shadow-md text-gray-700">Sign in</button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      email: "",
      password: "",
    }
  }
};
</script>

<style>
</style>