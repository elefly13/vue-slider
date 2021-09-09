Vue.config.devtools = true;

const app = new Vue (
    {
        el: '#root',
        data: {
            timer: null,
            contatoreFoto: 0,
            boxFoto: [
                'img/image1.jpg',
                'img/image2.jpg',
                'img/image3.jpg',
                'img/image4.jpg',
            ],
            playVisible: false,
        },
        mounted() {
            // this.startSlide(); ..... //metodo 1

            // setInterval(() => {
            //     this.succFoto();
            // }, 3000);  ..... //metodo 2

            document.addEventListener('keydown', (e) => {  //funzione che mi permette di usare le frecce della tastiera per cambiare le foto
                if (e.key == 'ArrowRight') {
                    this.succFoto();
                } else if (e.key == 'ArrowLeft') {
                    this.precFoto();
                }
            });
        },
        methods: {
            // startSlide() {
            //     this.timer = setInterval(this.succFoto, 3000);
            // },  ..... //metodo 1
            
            precFoto() {
                this.contatoreFoto -= 1;
                if (this.contatoreFoto < 0) this.contatoreFoto = (this.boxFoto.length -1);
            },
            succFoto() {
                this.contatoreFoto += 1;
                if (this.contatoreFoto == (this.boxFoto.length)) this.contatoreFoto = 0;
            },
            toggleVisibility() {
                this.playVisible = !this.playVisible;
                this.startStopSlider();
            },
            startStopSlider(){
                if(!this.playVisible) {
                    this.timer = setInterval(() => {
                        this.succFoto();
                    }, 3000);
                } else {
                    clearInterval(this.timer);
                }
            },
            changePhoto(index) {
                this.contatoreFoto = index;
            }
        }
    }
)

