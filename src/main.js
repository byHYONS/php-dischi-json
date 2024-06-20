/*/ ******************************
        istanza vue
******************************* */
const { createApp } = Vue;

createApp({
    data() {
        return {
            url: 'http://localhost:8888/php-dischi-json/src/data/server.php',
            album: [],
        }
    },
    methods: {
        callAPI() {
            axios.get(this.url).then(response => {
                this.album = response.data;
            })
        }
    },
    created() {
        this.callAPI()
    },
}).mount('#app');


// FINE