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
        },

        //? call API for info:
        getInfo(id){
            console.log('voglio più informazioni ' + id);
            const params = {
                id: id,
                action: 'info'
            };
            axios.get(this.url, params).then(response => {
                response.data;
            })

        }
    },
    created() {
        this.callAPI()
    },
}).mount('#app');


// FINE