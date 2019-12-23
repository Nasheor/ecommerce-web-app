import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        admin: false,
        login: false,
        cart: false,
        items: [],
        cart_items: [],
    },
    mutations: {
        isAdmin(state, payload) {
            this.state.admin = payload
        },
        switchLoggedInStatus(state, payload) {
            state.login = payload;
        },
        showCart(state, payload) {
            state.cart = payload;
        },
        populateItems(state, payload) {
            this.items = payload;
        },
        populateCart(state, {id, price, name}) {
            let flag = true;
            let quantity = 0;
            let item = {
                item_id: id,
                item_price: price,
                item_name: name,
                item_quantity: 1
            }
                // eslint-disable-next-line no-console
            console.log(this.state.cart_items.length);
            if (this.state.cart_items.length > 0) {
                this.state.cart_items.map( i => {
                    if(i.item_id === id) 
                        i.item_quantity += 1;
                        quantity = i.item_quantity
                        flag = false;
                })
            } 
            if (flag) {
                this.state.cart_items.push(item);
                // eslint-disable-next-line no-console
                console.log(this.state.cart_items);
                const params = {
                    "CID": "1",
                    "ID": id,
                    "Q": quantity
                }
                axios.post("http://localhost:8080/checkout", params, {                
                    headers: {
                    'content-type': 'application/json',
                },}).then(response => {
                    // eslint-disable-next-line no-console
                    if (response.data.S) {
                        alert("Successfully added cart to the account")
                    }
                })
                .catch(function(error) {
                    // eslint-disable-next-line no-console
                    console.log(error);
                    });
            }
        },
        openCheckout(state, payload) {
            this.state.cart = payload;
        }
    },
    getters: {
        getLogStatus(state) {
            return state.login;
        },
        getCartStatus(state) {
            return state.cart;
        },
        getItems(state) {
            return state.items;
        },
        getCart(state) {
            return state.cart_items;
        },
        getAdminStatus(state) {
            return state.admin;
        }
    }
})