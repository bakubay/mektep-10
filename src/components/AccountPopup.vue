<template>
  <div>
    <div class="px-2 w-screen md:max-w-md">
      <div class="bg-white shadow-lg border-t-2 border-green-100 flex flex-col px-6 py-4 justify-center items-center">
        <XIcon @click="onCloseAccountPopup" class="w-4 h-4 cursor-pointer text-gray-400 hover:text-gray-600 justify-items-end ml-auto" />
      </div>
    </div>
  </div>
</template>

<script>
import { XIcon } from "@heroicons/vue/solid";
export default {
  components: { XIcon },
  methods: {
    onCloseAccountPopup() {
      this.$emit("close-account-popup");
    },
  },
};
</script>

<style></style>
