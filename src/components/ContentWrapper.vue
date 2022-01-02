<template>
  <div id="contentWrapper" class="w-full lg:static lg:overflow-visible">
    <div class="w-full flex bg-white shadow-md">
      <div class="flex-auto px-4 sm:px-6 xl:px-8 pt-10 pb-5 lg:pb-5">
        <div class="text-lg font-bold text-center pt-2 border-b-2">{{title}}</div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items", "title"],
};
</script>

<style></style>
