const app = Vue.createApp({

    data() {
        return{
            userInput: ""
        };
    },


    methods: {
        submitForm(){
            alert('Your submission has been recieved.');
        },
    
        setOutput(event){
            this.userInput = event.target.value;
        }
    
    }
    
    

});

app.mount('#assignment');