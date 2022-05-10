<template>
  <div id="product-list-two">
    <h2>Product List Two</h2>
    <ul>
      <!-- li for each element from props array -->
      <li v-for="product in products">
      <span class="name">{{ product.name }}</span>
      <span class="price">$ {{ product.price }}</span>
      </li> 
    </ul>
    <h2>Product List One half</h2>
    <ul>
      <!-- li for each element from props array -->
      <li v-for="product in saleProducts">
      <span class="name">{{ product.name }}</span>
      <span class="price">$ {{ product.price }}</span>
      </li> 
    </ul>
  </div>
</template>

<script>
export default {
  // props: ['products'],
  // data() {
  //   return {
    
  //   }
  // }
  computed: {
    products() {
      // this will get the products from defined store
      return this.$store.state.products
    },
    saleProducts() {
      // when this code is move on the store.js then is no need here

      // // create a new one using map function and old products
      // var saleProducts = this.$store.state.products.map(product => {
      //   return { // is an object ...
      //     name: '**' + product.name + '**',
      //     price: product.price/2
      //   }
      // });
      // return saleProducts; // this return will be used in ul -> li area 

      // the new code will use this and return like : 
      return this.$store.getters.saleProducts
    }
  }
}
</script>

<style scoped>
#product-list-two{
    background: #D1E4FF;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-two ul{
    padding: 0;
    list-style-type: none;
}
#product-list-two li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #860CE8;
    display: block;
}
</style>