import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

let store = new Vuex.Store({
    state: {
        products: [],
        searchValue: '',
        cart: []
    },
    mutations: {
        SET_PRODUCTS_TO_STATE:(state, products) => {
            state.products = products;
        },
        SET_SEARCH_VALUE_TO_VUEX:(state, value) => {
            state.searchValue = value;
        },
        SET_CART:(state, product) => {
            state.cart.push(product);
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return axios.get('http://localhost:3000/products')
                .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products.data);
                    return products;
                })
                .catch((error) => {
                    console.log(error)
                    return error;
                })
        },
        GET_SEARCH_VALUE_TO_VUEX ({commit}, value) {
            commit('SET_SEARCH_VALUE_TO_VUEX', value)
        },
        ADD_TO_CART({commit}, product) {
            commit('SET_CART', product);
        },
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        SEARCH_VALUE(state) {
            return state.searchValue;
        },
        CART(state) {
            return state.cart;
        }
    }
});

export default store;