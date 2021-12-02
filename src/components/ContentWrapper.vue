<template>
  <div id="contentWrapper" class="w-full lg:static lg:overflow-visible bg-white shadow-md">
    <div class="w-full flex">
      <div class="flex-auto px-4 sm:px-6 xl:px-8 pt-10 pb-10 lg:pb-10">
        <div class="text-lg font-bold text-center py-2">{{title}}</div>
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
