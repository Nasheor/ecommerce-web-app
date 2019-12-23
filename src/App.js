import AppDrawer from './components/ui/AppDrawer/AppDrawer.vue'
import Login from './components/services/Login/Login.vue'
import Product from './components/services/Product/Product.vue';
import Checkout from './components/services/Checkout/Checkout.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'App',
    components: {
        AppDrawer,
        Login,
        Product,
        Checkout,
    },
    methods: {
        changeCheckoutStatus() {
            this.$store.commit("openCheckout", false);
        }
    },
    computed: {
        ...mapGetters({
            logStatus: 'getLogStatus',
            checkoutStatus: 'getCartStatus',
        })
    }
};