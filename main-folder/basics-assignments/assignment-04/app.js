const app = Vue.createApp({

    data(){
        return{
           userInput: '',
           paragraphIsVisible: true,
           inputBC: ''
        }

    },

    methods: {
        buttonToggled(){
            this.paragraphIsVisible = !this.paragraphIsVisible;
        }
    },


    computed: {
      paraClasses(){
        return{
            user1: this.userInput === 'user1',
            user2: this.userInput === 'user2',
            visible: this.paragraphIsVisible,
            hidden: !this.paragraphIsVisible
            }
        }
    }
                
  
});

app.mount('#assignment')