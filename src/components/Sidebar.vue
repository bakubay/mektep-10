<template>
  <div
    id="sidebar"
    class="
      fixed
      z-40
      inset-0
      flex-none
      h-full
      bg-opacity-25
      w-full
      lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60
      xl:w-72
      lg:block
      hidden
    "
  >
    <div
      class="
        h-full
        overflow-y-auto
        scrolling-touch
        lg:h-auto lg:block lg:relative lg:bg-transparent
        overflow-hidden
        lg:top-18
        bg-white
        mr-24
        lg:mr-0
      "
    >
      <nav
        class="
          px-1
          pt-6
          overflow-y-auto
          text-base
          sm:px-3
          xl:px-5
          lg:text-sm
          pb-10
          lg:pt-10 lg:pb-14
          sticky?lg:h-(screen-18)
        "
      >
        <div
          class="
            px-3
            py-2
            font-semibold
            border-b-2 border-gray-200 border-transparent
          "
        >
          Table of Content
        </div>
        <ul>
          <li
            v-for="(item, i) in items"
            :key="i"
            :class="{ activeClass: activeItem==i}"
            @click="onSelectedSidebarItem(item, i)"
            class="hover:bg-gray-300 transition-colors duration-200"
          >
            <router-link class="px-3 py-2 relative block text-gray-900" :to="item.courseUrl">{{
              item.courseName
            }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  props: ["items"],
  setup() {
    let activeItem = ref(-1);

    const onSelectedSidebarItem = (item, i) => {
      activeItem.value = i;
    };
    return { activeItem, onSelectedSidebarItem };
  },
};
</script>

<style>
.activeClass {
  background-color: rgb(209 213 219);
}
</style>