import Vue from 'vue'
import App from './App.vue'

// 建立一个总线
export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})