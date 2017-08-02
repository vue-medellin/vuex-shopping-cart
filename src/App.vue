<template>
  <div id="app">
    <img src="./assets/logo.png">

    <div class="container">
      <h1>{{ title }}</h1>
      <hr>

      <div class="row">

        <div class="col-6">
          <product-list></product-list>
        </div>
        <div class="col-6">
          <cart-list></cart-list>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

import ProductList from './components/ProductList';
import CartList from './components/CartList';

export default {
  name: 'app',
  data() {
    return {
      title: 'Welcome to Vue Shopping',
    };
  },
  components: {
    ProductList,
    CartList,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

label {
  font-size: 1.5em;
}

</style>
