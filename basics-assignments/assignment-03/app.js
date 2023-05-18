
const app = Vue.createApp({
    data(){
        return{
            counter: 0
        }
    },

    computed: {
        statusMessage(){
            if(this.counter < 37){
              return "Not there yet"
        } else if (this.counter > 37){
            return "Too much!"
        } else {
            return "You got it!"
        }

    }
        
    },

    methods: {

        add(num){
            this.counter = this.counter + num;
        }

    }


})

app.mount('#assignment');