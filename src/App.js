import AppDrawer from './components/ui/AppDrawer/AppDrawer.vue'
import Login from './components/services/Login/Login.vue'
import { mapGetters } from 'vuex';

export default {
    name: 'App',
    components: {
        AppDrawer,
        Login,
    },
    methods: {

    },
    computed: {
        ...mapGetters({
            logStatus: 'getLogStatus'
        })
    },
};