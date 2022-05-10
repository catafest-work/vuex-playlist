import Vue from 'vue'
import App from './App.vue'
// vuex import store from the : /store/store.js 
import {store} from './store/store'

// this vue instance is responsible by all 
new Vue({
  store: store,
  el: '#app', // take id and 
  render: h => h(App) // is rendered
})
