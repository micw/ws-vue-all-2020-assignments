const app = Vue.createApp({
  data() {
    return {
      numberOfLikes: 0,
      sumOfDonations: 0
    }
  },
  methods: {
    doLike: function() {
      this.numberOfLikes++;
    },
    doDonate: function() {
      this.sumOfDonations+=5;
    }
  }
})

app.mount('#app')
