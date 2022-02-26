<template>
  <div class="fixed z-50 flex justify-center items-center w-full h-full top-0 left-0 bg-gray-900 bg-opacity-10 ">
      <div class="flex flex-col justify-center rounded-sm max-w-sm md:w-1/3 p-8 bg-white">
          <p class="p-4 mb-10 text-center" >{{ modalMessage }}</p>
          <button class="bg-green-200 hover:bg-green-100 text-gray-700 py-2 px-8" @click="closeModal">Close</button>
      </div>
  </div>
</template>

<script>
export default {
    props: ["modalMessage"],
    methods:{
        closeModal(){
            this.$emit('close-modal')
        }
    }
}
</script>

<style>

</style>