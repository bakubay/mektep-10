<template>
  <div id="sidebar" class="fixed z-40 inset-0 flex-none h-full bg-opacity-25 w-full lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block" :class="{'hidden': !isShowMenu}">
    <div class="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:bg-transparent overflow-hidden lg:top-18 bg-white mr-24 lg:mr-0">
      <nav class="px-1 pt-6 overflow-y-auto text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-10 lg:pb-14 sticky?lg:h-(screen-18)">
        <div class="px-3 py-2 font-semibold border-b-2 border-gray-200 border-transparent">Table of Content</div>
        <ul>
          <li v-for="(section, i) in sections" :key="i" :class="{ activeClass: sectionId == i + 1 }" class="hover:bg-gray-300 transition-colors duration-200">
            <router-link :to="{ name: 'Section', params: { sectionId: section.index } }">
              <div class="flex items-center">
                <div class="grid grid-rows-3">
                  <div class="border-r-2 h-4 mx-auto overflow-y-visible z-50" :class="i !== 0 ? 'opacity-100' : 'opacity-0'"></div>
                  <div class="w-4 h-4 rounded-full border-2 shadow-sm border-gray-200 bg-white flex justify-center items-center">
                    <div class="w-2 h-2 rounded-full bg-green-300"></div>
                  </div>
                  <div class="border-r-2 h-4 mx-auto overflow-y-visible z-50" :class="i !== sections.length - 1 ? 'opacity-100' : 'opacity-0'"></div>
                </div>
                <div class="px-3 py-2 relative block text-gray-900">
                  {{ section.title }}
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: ["sections", "sectionId"],
  data(){
    return {
      showMenu: "hidden"
    }
  },
  computed:{
      isShowMenu(){
        return this.$store.state.showMobileMenu
      }
  }
};
</script>

<style>
.activeClass {
  background-color: rgb(209 213 219);
}
</style>
