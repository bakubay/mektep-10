<template>
  <div id="tableOfContent" v-click-outside="toggleMobileMenu" class="transform lg:transform-none fixed w-3/4 md:w-1/3 lg:w-1/5 z-40 top-16 left-0 flex-none h-full bg-opacity-25 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:block transition-all delay-100 ease-in" :class="isShowMenu ? 'translate-x-0' : '-translate-x-full'">
    <div class="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:bg-transparent overflow-hidden lg:top-18 bg-white lg:mr-0">
      <nav class="px-1 pt-6 overflow-y-auto text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-10 lg:pb-14 sticky?lg:h-(screen-18)">
        <div class="px-3 py-2 font-semibold border-b-2 border-gray-200 border-transparent">Table of Content</div>
        <ul>
          <li v-for="(section, i) in sections" :key="i" :class="{ activeClass: sectionId == i + 1 }" class="hover:bg-gray-300 transition-colors duration-200">
            <router-link :to="{ name: 'Section', params: { sectionId: section.index } }">
              <div class="flex items-stretch pl-2">
                <div class="flex flex-col">
                  <div class="border-r-2 flex-1 mx-auto z-50" :class="i !== 0 ? 'opacity-100' : 'opacity-0'"></div>
                  <div class="w-4 h-4 rounded-full border-2 shadow-sm border-gray-200 bg-white flex justify-center items-center">
                    <div class="w-2 h-2 rounded-full bg-green-300" :class="isStudied"></div>
                  </div>
                  <div class="border-r-2 flex-1 mx-auto z-50" :class="i !== sections.length - 1 ? 'opacity-100' : 'opacity-0'"></div>
                </div>
                <div class="px-3 py-2 text-gray-900">
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
  data() {
    return {};
  },
  computed: {
    isShowMenu() {
      return this.$store.state.showMobileMenu;
    },
    isStudied() {
      return "oppacity-100";
    },
  },
  methods: {
    toggleMobileMenu() {
      if(this.isShowMenu === true){
        this.$store.commit("toggleMobileMenu");
      }
      console.log(this.isShowMenu)
    },
  },
};
</script>

<style>
.activeClass {
  background-color: rgb(209 213 219);
}
</style>
