<template>
  <div class="flex w-full h-full justify-center">
    <iframe
      width="100%"
      height="480px"
      :src="video_url"
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
  props: ["videoUrl"],
  computed:{
    video_url(){
      return this.isURL(this.videoUrl) ? this.videoUrl : 'https://www.youtube.com/embed/VEIf5TfceAw'
    }
  },
  methods: {
    isURL(str) {
  const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}
  }
};
</script>

<style></style>
