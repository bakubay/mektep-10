<template>
  <content-wrapper :title="`About`" >
    <div class="flex">
      <img class="w-full sm:w-1/4" src="Mektep.jpg">
      <div class=" text-center text-4xl">Our aim is to provide high quality education material in Kazakh language</div>
    </div>
  </content-wrapper>
</template>

<script>
import ContentWrapper from '../components/ContentWrapper.vue'

export default {
  components: {ContentWrapper},

}
</script>
