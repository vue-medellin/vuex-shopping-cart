<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <hr>
    <div class="card" v-show="cartList.length > 0">
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-bind:key="product.id" v-for="product in cartList">
          <div class="row">          
            <div class="col-5">
              <label>{{product.name}}</label>
            </div>
            <div class="col-2">
              <label>{{ product.qty }}</label>
            </div>
            <div class="col-3">
              <label>{{ product.price | formatPrice }}</label>
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-danger btn-lg" @click="removeProduct(product.id)">
                  <i class="fa fa-minus"></i>
              </button>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">          
            <div class="col-5">
              <label><b>Total Items</b></label>
            </div>
            <div class="col-2">
              <label><b>{{ totalQty }}</b></label>
            </div>
            <div class="col-3">
              <label><b>{{ totalPrice | formatPrice}}</b></label>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import store from './../store';

  export default {
    name: 'cart-list',
    data() {
      return {
        title: 'Cart',
      };
    },
    methods: {
      removeProduct(productId) {
        store.dispatch('REMOVE_PRODUCT', productId);
      },
    },
    computed: {
      cartList() {
        return store.getters.cartList;
      },
      totalQty() {
        return store.getters.totalQty;
      },
      totalPrice() {
        return store.getters.totalPrice;
      },
    },
    filters: {
      formatPrice(value) {
        return '$'.concat(value.toFixed(2));
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

label {
  font-size: 1em;
}
</style>
