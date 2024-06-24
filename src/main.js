/*/ ******************************
        istanza vue
******************************* */
const { createApp } = Vue;

createApp({
    data() {
        return {
            url: 'http://localhost:8888/boolean/esercizi/php-dischi-json/src/data/server.php', 
            covers: [],
            album:[],
            modale: false,
            overlay: false,
            addAlbumForm: false,
        }
    },
    methods: {
        //? chiamata API:
        callAPI() {
            console.log('sto facendo la chiamata cover')
            axios.get(this.url).then(response => {
                this.covers = response.data;
            })
        },

        //? call API for info:
        getInfo(id){
            console.log('voglio più informazioni ' + id);
            const params = {
                action: 'info',
                id: id,
            };
            axios.get(this.url, {
                params,
            }).then(response => {
               this.album = response.data;
            });

            this.modale= true;
            this.overlay= true;
            document.body.style.overflow = 'hidden';
        },

        //? modale:
        closeInfo(){
            this.modale = false;
            this.overlay= false;
            document.body.style.overflow = '';
        },

        //? aggiungi album:
        addAlbum(){
            console.log('aggiungo album');
            this.addAlbumForm = true;
            this.overlay = true;
            document.body.style.overflow = 'hidden';


            this.callPostAddAlbum();
            
        },

        //? call POST aggiunge album:
        callPostAddAlbum(){
            console.log('add album');
            

            
            
        },

        //? uscita dal form aggiungi album:
        exitToCall(){
            this.addAlbumForm = false;
            this.overlay = false;
            document.body.style.overflow = '';
        }
    },
    created() {
        this.callAPI()
    },
}).mount('#app');


// FINE