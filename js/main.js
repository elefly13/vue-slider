Vue.config.devtools = true;

const app = new Vue (
    {
        el: '#root',
        data: {
            contatoreFoto: 0,
            boxFoto: [
                'img/image1.jpg',
                'img/image2.jpg',
                'img/image3.jpg',
                'img/image4.jpg',
            ]
        },
        methods: {
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
