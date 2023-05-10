const app = Vue.createApp({
    data(){
        return{
            yourName: 'Michael Kestler',
            yourAge: 'Age: 31',
            ageInFive: 'Age in 5 years: 36',
            randomNumber: 'Favorite Number: ' + (Math.random()).toFixed(2),
            imageUrl: 'https://media.licdn.com/dms/image/C4D03AQGfl52yFeHRow/profile-displayphoto-shrink_800_800/0/1517448638219?e=1689206400&v=beta&t=Hf2plOaVJuNtHRpbbzCpMO-XhV8ry4qh7w0i2nYrru0',
        };
    },
    methods: {
        randomNumMethod(){
            const rando = (Math.random()).toFixed(2);
            if (rando === .14){
                return rando + ' That\'s my lucky number!';
            } else {
                return rando + ' That\'s not my lucky number!';
            }
        }
    }
});

app.mount('#assignment');