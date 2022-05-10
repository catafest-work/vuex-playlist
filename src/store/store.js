import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// this will export and don't use props will use vuex methods
export const store = new Vuex.Store({
  state: {
    products:[
      {name: 'Banana Skin', price: 20},
      {name: 'Shiny Star', price: 40},      
      {name: 'Green Shells', price: 60},
      {name: 'Red Shells', price: 80}
    ]
  }
})