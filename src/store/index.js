import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    productList: [
      {
        id: 1,
        name: 'Macbook Pro',
        qty: '',
        price: 1300,
        bought: false,
      },
      {
        id: 2,
        name: 'PS 4',
        qty: '',
        price: 400,
        bought: false,
      },
      {
        id: 3,
        name: 'TAG Heuer Watch',
        qty: '',
        price: 700,
        bought: false,
      },
    ],
  },
  actions: {
    CHECK_OUT_PRODUCT: ({ commit }, product) => {
      commit('CHECK_OUT_PRODUCT_MUTATION', product);
    },
    REMOVE_PRODUCT: ({ commit }, productId) => {
      commit('REMOVE_PRODUCT_MUTATION', productId);
    },
  },
  mutations: {
    CHECK_OUT_PRODUCT_MUTATION: (state, product) => {
      const actualProduct = state.productList.find(x => x.id === product.id);
      actualProduct.qty = product.qty;
      actualProduct.bought = true;
    },
    REMOVE_PRODUCT_MUTATION: (state, productId) => {
      const actualProduct = state.productList.find(x => x.id === productId);
      actualProduct.qty = '';
      actualProduct.bought = false;
    },
  },
  getters: {
    productList: (state) => {
      const listFiltered = state.productList.filter(x => x.bought === false);
      return listFiltered;
    },
    cartList: (state) => {
      const listFiltered = state.productList.filter(x => x.bought === true);
      return listFiltered;
    },
    totalQty: (state) => {
      const qtyFiltered = state.productList.filter(x => x.bought === true);
      return qtyFiltered.reduce((a, b) => a + parseInt(b.qty, 0), 0);
    },
    totalPrice: (state) => {
      const priceFiltered = state.productList.filter(x => x.bought === true);
      return priceFiltered.reduce((a, b) => a + (parseInt(b.qty, 0) * b.price), 0);
    },
  },
});

export default store;
