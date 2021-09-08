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
            ]
        },
        mounted: function() {
            this.startSlide();
        },
        methods: {
            startSlide: function() {
                this.timer = setInterval(this.succFoto, 3000);
            },
            
            precFoto() {
                this.contatoreFoto -= 1;
                if (this.contatoreFoto < 0) this.contatoreFoto = (this.boxFoto.length -1);
            },
            succFoto() {
                this.contatoreFoto += 1;
                if (this.contatoreFoto == (this.boxFoto.length)) this.contatoreFoto = 0;
            }
            
        }
    }
)

