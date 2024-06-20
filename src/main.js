/*/ ******************************
        istanza vue
******************************* */
const { createApp } = Vue;

createApp({
    data() {
        return {
            url: 'http://localhost:8888/php-dischi-json/src/data/server.php',
            albums: [],
        }
    },
    methods: {
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