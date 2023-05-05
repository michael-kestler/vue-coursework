const app = Vue.createApp({
    data(){
        return{
            yourName: 'Michael Kestler',
            yourAge: 'Age: 31',
            ageInFive: 'Age in 5 years: 36',
            randomNumber: 'Favorite Number: ' + (Math.random()).toFixed(2)
        };

    }
});

app.mount('#assignment');