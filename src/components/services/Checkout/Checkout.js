import { mapGetters} from 'vuex'

export default {
    data() {
        return {
            total_price: 0
        };
    },
    computed: {
        ...mapGetters({
            items: "getCart",
        }),
    },
    mounted() {
         // eslint-disable-next-line no-console
         console.log(this.items);
    }
}