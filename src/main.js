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
            newAlbum: '',
            newArtista: '',
            newUscita: '',
            newValutazione: '',
            
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

        //? cancella album:
        clearAlbum(id){
            console.log('cancella l\'album' + id);
            const params = {
                action: 'clear',
                id: id,
            };
            axios.get(this.url, {
                params,
            }).then(response => {
                console.log(response);
                this.callAPI();
            });

            // this.callAPI();
            
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
            
        },

        //? call POST aggiunge album:
        callPostAddAlbum(){
            console.log('add album');
            
            const data = {
                action: 'create',
                album: this.newAlbum,
                artista: this.newArtista,
                uscita: this.newUscita,
                valutazione: this.newValutazione
            };

            axios
            .post(this.url, data, {
            headers: {'Content-Type': 'multipart/form-data'},})
            .then(response => {
            console.log(response);
            });
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