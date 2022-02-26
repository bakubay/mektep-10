<template>
  <div id="body-container" class="w-full flex justify-center bg-gray-100 pt-3 pb-3">
      <div class="w-full max-w-7xl px-5 text-base">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#body-container {
  min-height: calc(100vh - 64px);
}
</style>