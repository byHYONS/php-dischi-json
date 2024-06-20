/*/ ******************************
        istanza vue
******************************* */
const { createApp } = Vue;

createApp({
    data() {
        return {
            url: 'http://localhost:8888/php-dischi-json/src/data/server.php',
            titlePage: 'Bentornato!',
        }
    },
    methods: {
        callAPI() {
            axios.get(this.url).then(response => {
                console.log(response);
            })
        }
    },
}).mount('#app');
