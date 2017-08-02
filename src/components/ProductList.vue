<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <hr>
    <div class="card" v-show="productList.length > 0">
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-bind:key="product.id" v-for="product in productList">
          <div class="row">
            <div class="col-7">
              <label>{{product.name}}</label>
            </div>
            <div class="col-3">
              <label>{{ product.price | formatPrice }}</label>
            </div>
            <div class="col-2">
              <input type="text" v-model="product.qty" v-on:keyup.enter="checkOut(product.id, product.qty)" class="form-control" placeholder="Qty">
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
  name: 'product-list',
  data() {
    return {
      title: 'Product List',
    };
  },
  methods: {
    checkOut(productId, productQty) {
      const product = {
        id: productId,
        qty: productQty,
      };

      store.dispatch('CHECK_OUT_PRODUCT', product);
    },
  },
  computed: {
    productList() {
      return store.getters.productList;
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

a {
  color: #42b983;
}
</style>
