const app = Vue.createApp({

    data() {
        return{
            userInput: "",
            savedInput: ""
        };
    },


    methods: {
        submitForm(){
            alert('Your submission has been recieved.');
        },
    
        setOutput(event){
            this.userInput = event.target.value;
        },
    
        setOutput2(){
            this.savedInput = this.userInput;
        }
}
    

});

app.mount('#assignment');