const app = Vue.createApp ({

    data(){
        return{
            enteredTask: '',
            tasks: [],
            listIsVisible: true
        }
    },

    methods: {
        addTask(){
            this.tasks.push(this.enteredTask)
        },

        hideShow(){
            
                this.listIsVisible = !this.listIsVisible;
            }
            
        },

        computed: {
            listClasses(){
                return {
                    hidden: !this.listIsVisible,
                    visible: this.listIVisible
                }

            }

        }





});

app.mount('#assignment');