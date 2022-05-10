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
  }, 
  getters: {
    // this will be a function 
    saleProducts: state => {
      // will use the source code defined inthe classic way but will need to fix with the state defined and remove the :this.$store.
      //var saleProducts = this.$store.state.products.map(product => {
      var saleProducts = state.products.map(product => {
        return { 
          name: '**' + product.name + '**',
          price: product.price/2
        }
      });
      return saleProducts;
    }
  }
})