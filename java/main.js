const { createApp } = Vue

createApp({
    data() {
        return {
            titolo:"",
            mail:"",
            emails:[],
        }
    },
    methods: {
        email(){           
        }
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then( response=> {
               /* console.log dell'email*/
                console.log(`ciao ${response.data.response}`)
                this.mail=response.data.response;
                this.emails.push(this.mail);
            })
            
        }
        console.log(this.emails)     
        
    }
}).mount('#app')