import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'

const app = createApp(App).use(router).use(store)

app.directive('click-outside', {
    mounted: (el, binding) => {
        el.clickOutsideEvent = event => {
          if (!(el == event.target || el.contains(event.target))) {
            binding.value();
          }
        };
        document.addEventListener("click", el.clickOutsideEvent);
      },
      unmounted: el => {
        document.removeEventListener("click", el.clickOutsideEvent);
      },
  });

  app.mount('#app')