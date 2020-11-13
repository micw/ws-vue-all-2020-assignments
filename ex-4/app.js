const app = Vue.createApp({})

app.component("comp-article", {
  data() {
    return {
      likesNumber: 0,
      donations: 0,
    }
  },
  methods: {
    increaseLikes () {
     this.likesNumber++
    },
    donateFiveEuro(num) {
      this.donations += num
    },
  },
  computed: {
    star () {
      return this.likesNumber > 10 ? '&#9733;' : ''
    }
  },
  template: `
  <!--BEGIN: Article -->
  <section class="block article">
    <div class="article__body">
<!--
 TODO
 Assignment 6:
 Please divide current application into components
 Note: alert and discussion could stay together
-->
      <h2 class="article__title"><span v-html="star" class="star"></span> Effects present letters</h2>
      <div class="article__snippet">
        Effects present letters inquiry no an removed or friends. Desire behind latter me though in. Supposing shameless am he engrossed up additions. My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed.

        At distant inhabit amongst by. Appetite welcomed interest the goodness boy not. Estimable education for disposing pronounce her. John size good gay plan sent old roof own. Inquietude saw understood his friendship frequently yet. Nature his marked ham wished.
      </div>
        <div class="article__detials">
          <div class="article-buttons article-likes">
            <div class="article-likes__description">
              <span id="article-likes__number">{{ likesNumber }}</span>
                reactions
            </div>
            <button class="button button--red" @click="increaseLikes()">
              <span class="article-likes__heart">&#10084;</span>
            </button>
          </div>
          <div class="article-buttons article-donations">
            <div class="article-likes__description">
              <span id="article-likes__number">{{ donations }}€</span>
                donated
            </div>
            <button class="button button--green" @click="donateFiveEuro(5)">
              <span >donate 5€</span>
            </button>
          </div>
        </div>
      </div>
  </section>
<!--END: Article -->
  `
})

app.component("comp-discussion", {
  data() {
    return {
      comment: {
        commentAuthor: 'Donald',
        commentText: 'Do commanded an shameless we disposing do. Indulgence ten remarkably nor are impression out. Power is lived means oh every in we quiet. Remainder provision an in intention. Saw supported too joy promotion engrossed propriety. Me till like it sure no sons.'
      },
      commentTemporary: {
        commentAuthor: 'Joe',
        commentText: 'Do commanded an shameless we disposing do. Indulgence ten remarkably nor are impression out. Power is lived means oh every in we quiet. Remainder provision an in intention. Saw supported too joy promotion engrossed propriety. Me till like it sure no sons.'
      },
      alert: '',
      setTextColor: false
    }
  },
  methods: {
    setCommentText (e) {
      this.commentTemporary.commentText = e.target.value;
    },
    setCommentAuthor (e) {
      this.commentTemporary.commentAuthor = e.target.value;
    },
    addComment() {
      this.comment = {
        commentAuthor: this.commentTemporary.commentAuthor,
        commentText: this.commentTemporary.commentText
      }
    }
  },
  watch: {
    comment (value) {
      if (value.commentAuthor === 'Donald') {
        this.setTextColor = true
        this.alert = 'Hit the road, Donald!'
      } else {
        this.setTextColor = false
        this.alert = ''
      }
    }
  },
  template: `
  <!--BEGIN: Alert -->
    <section class="block block-alert">
      <div class="alert_body">
        {{alert}}
      </div>
    </section>
  <!--END: Alert -->

  <!--BEGIN: Dicsussion -->
    <section class="block discussion">
      <div class="discussion__body">
        <h3 class="discussion__title"> Discussion </h3>
        <div class="discussion__comment" :class="{'text-color--red': setTextColor}">
          {{comment.commentText}}
        </div>
        <div class="discussion__details">
          <div class="author">{{comment.commentAuthor}}</div>
        </div>
      <div class="discussion__form">
        <form @submit.prevent="addComment" class="discussion__form__fields">
          <div class="form-el">
            <label for="comment">Comment</label>
            <textarea name="comment" id="comment" cols="50" rows="5" @input="setCommentText">
            </textarea>
          </div>
          <div class="form-el">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" class="input-name" @input="setCommentAuthor">
          </div>
          <button class="button button--black form-el">send</button>
        </form>
      </div>
      </div>
    </section>
    <!--END: Dicsussion -->
  `
})


app.mount('#app')
