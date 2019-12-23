import axios from "axios"
import { mapGetters} from 'vuex'

export default {
    data () {
        return {
          itemsPerPageArray: [4, 8, 12],
          search: '',
          filter: {},
          sortDesc: false,
          page: 1,
          itemsPerPage: 4,
          sortBy: 'name',
          keys: [
            'PRICE',
            'productid',
            'name',
          ],
          items: [],
          endpoint: "http://localhost:8081/products",
        }
      },
      computed: {
        ...mapGetters({
          admin: "getAdminStatus",
         }),
        numberOfPages () {
          return Math.ceil(this.items.length / this.itemsPerPage)
        },
        filteredKeys () {
          return this.keys.filter(key => key !== `Name`)
        },
      },
      methods: {
        nextPage () {
          if (this.page + 1 <= this.numberOfPages) this.page += 1
        },
        formerPage () {
          if (this.page - 1 >= 1) this.page -= 1
        },
        updateItemsPerPage (number) {
          this.itemsPerPage = number
        },
        getProductData() {
            axios.get(this.endpoint)
            .then(response => {
              this.items = [...this.items, ...response.data];
              this.$store.commit("populateItems", this.items); 
            });
        },
        addItem(event) {
            let id = event.target.value;
            let flag = false;
            this.items.map( item => {
                if(item.productid === id) 
                    this.$store.commit("populateCart", {id: item.productid, price: item.PRICE, name: item.name});
                    flag = true
                    return 

            });
                // eslint-disable-next-line no-console
            console.log(flag);
        }
      },
      mounted() {
          this.getProductData()
          
      }
}