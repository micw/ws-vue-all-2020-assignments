const app = Vue.createApp({
  data() {
    return {
      likesNumber: 0,
      donations: 0,
      comments: [ {
        text: "Do commanded an shameless we disposing do. Indulgence ten remarkably nor are impression out. Power is lived means oh every in we quiet. Remainder provision an in intention. Saw supported too joy promotion engrossed propriety. Me till like it sure no sons.",
        author: "Donald"
        }],
      // vers to hold the form. FIXME: do we need global vars here?
      formText: "",
      formAuthor: "",
    }
  },
  methods: {
    increaseLikes () {
     this.likesNumber++
    },
    donateFiveEuro(num) {
      this.donations += num
    },
    postComment() {
      // add comment to list of comments
      this.comments.push({text:this.formText,author:this.formAuthor});
      // clear the form
      this.formText=this.formAuthor="";
    },
  }
})

app.mount('#app')
