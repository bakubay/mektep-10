<template>
  <div class="flex w-full h-full justify-center">
    <iframe
      width="100%"
      height="480px"
      :src="videoUrl"
      title="YouTube video player"
      frameborder="0"
      allow=""
      allowfullscreen
    >
    </iframe>
  </div>
</template>

<script>
export default {
  props: ["videoUrl"]
};
</script>

<style></style>
