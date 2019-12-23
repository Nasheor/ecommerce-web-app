import {mapGetters} from 'vuex'

export default {
    data() {
        return {
            cart_status: false,
        };
    },
    methods: {
        logout() {
            this.$store.commit("switchLoggedInStatus", false);
        },
        showCart() {
            this.cart_status = !this.cart_status
            this.$store.commit("showCart", this.cart_status);
        }
    },
    computed:{
        ...mapGetters({
            logStatus: "getLogStatus",
        }),
    }
}