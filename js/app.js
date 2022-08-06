
const app = new Vue({
    el:"#app",
    data:{
        mensaje:"Hola mundo",
        content_html:"<h1>Hola Mundo Otra Vez</h1>",
        src:"https://cdn1.epicgames.com/undefined/offer/EGS_LCGEntertainmentInc_TheWolfAmongUs_S2-1280x1440-3d592297f8f96e8699f46ce34a7f5b10.jpg",
        alt:"texto de no imagen",
        title:"titulo de la imagen",
        numero:13
    },
    methods:{
        incrementar:function(){
            this.numero ++;
        },     
        decrementar(){
            this.numero --;
        }        
    },
    watch:{
        numero:function(val){
            console.log("watch = "+val);
        }
    }
})