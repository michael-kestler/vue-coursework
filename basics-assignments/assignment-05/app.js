const app = Vue.createApp({
  data() {
    return {
      enteredTask: "",
      tasks: [],
      listIsVisible: true,
    };
  },

  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
    },

    hideShow() {
      this.listIsVisible = !this.listIsVisible;
    },

    // hideShowCaption() {
    //   if (this.listIsVisible) {
    //     return "Hide";
    //   } else {
    //     return "Show";
    //   }
    // },
  },

  computed: {
    // listClasses() {
    //   return {
    //     hidden: !this.listIsVisible,
    //     visible: this.listIVisible,
    //   };
    // },

    buttonCaption() {
      return this.listIsVisible ? "Hide List" : "Show List";
    },
  },
});

app.mount("#assignment");
