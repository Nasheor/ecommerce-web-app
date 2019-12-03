import axios from 'axios'


export default{
    data() {
        return {
            uname: '',
            password: '',
            admin: false,
            endpoint: "http://localhost:8080/login"
        }
    },
    methods: {
        submit(){
            const params = {
                "u": this.uname,
                "p": this.password,
                "a": this.admin
            }

            if(this.uname.length>0 && this.password.length>0)
                axios.post(this.endpoint, params, {                
                    headers: {
                    'content-type': 'application/json',
                },}).then(response => {
                    // eslint-disable-next-line no-console
                    console.log(response);
                })
                .catch(function(error) {
                    // eslint-disable-next-line no-console
                    console.log(error);
                  });
        },
        toggleAdmin(){
            this.admin = !this.admin;
        }
    }
}