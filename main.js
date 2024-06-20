/*/ ******************************
        istanza vue
******************************* */
const { createApp } = Vue;

createApp({
    data() {
       return {
        titlePage: 'Bentornato!',
       }
    }
}).mount('#app');