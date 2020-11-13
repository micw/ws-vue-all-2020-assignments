<template>
  <div>
    <section class="block block-alert">
      <div class="alert_body">
        {{alert}}
      </div>
    </section>
    <section class="block discussion">
      <div class="discussion__body">
        <h3 class="discussion__title"> Discussion </h3>
        <comment v-for="comment in comments" :key="comment" :comment="comment"></comment>
        <div class="discussion__form">
          <comment-form @send="addComment" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CommentForm from './Discussion/CommentForm.vue';
import Comment from './Discussion/Comment.vue';

export default {
name: 'Discussion',
components: {
  'comment-form': CommentForm,
  'comment': Comment,
},
data () {
  return {
      comments: [ {
          commentAuthor: 'Donald',
          commentText: 'Do commanded an shameless we disposing do. Indulgence ten remarkably nor are impression out. Power is lived means oh every in we quiet. Remainder provision an in intention. Saw supported too joy promotion engrossed propriety. Me till like it sure no sons.',
          setTextColor: true,
        }
      ],
      alert: '',
      setTextColor: false
  }
},
methods: {
 addComment(c) {
      var comment={
        commentAuthor: c.author,
        commentText: c.text
      }
      if (c.author === 'Donald') {
        comment.setTextColor = true
        this.alert = 'Hit the road, Donald!'
      } else {
        comment.setTextColor = false
        this.alert = ''
      }
      this.comments.push(comment)
    }
  }
}
</script>

<style>
/* Comment
   ========================================================================== */

.discussion__body{
  padding: 2.5rem;
}

.discussion__title {
  margin-bottom: 20px;
  font-size: 1.8rem;
}

.discussion__comment {
  font-size: 0.9rem;
  line-height: 1.4rem;
}

.discussion__details {
  display: flex;
  justify-content: flex-end;
  font-weight: 900;
}

.discussion__form__fields {
  display: flex;
  flex-direction: column;
  max-width: 400px;
}

/* Form
   ========================================================================== */

.form-el {
  margin-top: 15px;
}

.input-name {
  display: block;
}

.alert_body{
  padding: 1rem 2.5rem;
  color: #e21912;
  font-weight: 900;
}

.text-color--red {
   color: #e21912;
 }

</style>