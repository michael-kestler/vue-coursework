const app = Vue.createApp({

    data() {
        return{
            userInput: "",
            userInput2: ""
        };
    },


    methods: {
        submitForm(){
            alert('Your submission has been recieved.');
        },
    
        setOutput(event){
            this.userInput = event.target.value;
        },
    
        setOutput2(event){
            this.userInput2 = event.target.value;
        }
}
    

});

app.mount('#assignment');