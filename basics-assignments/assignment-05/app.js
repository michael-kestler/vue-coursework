const app = Vue.createApp ({

    data(){
        return{
            enteredTask: '',
            tasks: []
        };
    },

    methods: {
        addTask(){
            this.tasks.push(this.enteredTask)
        }
    }



});

app.mount('#assignment');