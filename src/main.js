/*/ ******************************
        istanza vue
******************************* */
const { createApp } = Vue;

createApp({
    data() {
        return {
            url: 'http://localhost:8888/boolean/esercizi/php-dischi-json/src/data/server.php', 
            albums: [],
        }
    },
    methods: {
        //? chiamata API:
        callAPI() {
            axios.get(this.url).then(response => {
                this.albums = response.data;
            })
        }
    },
    created() {
        this.callAPI()
    },
}).mount('#app');


// FINE