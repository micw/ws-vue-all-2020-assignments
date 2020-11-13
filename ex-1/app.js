const app = Vue.createApp({
  data() {
    return {
      numberOfLikes: 0,
      sumOfDonations: 0
    }
  },
  methods: {
    doLike() {
      this.numberOfLikes++;
    },
    doDonate() {
      this.sumOfDonations+=5;
    }
  }
})

app.mount('#app')
