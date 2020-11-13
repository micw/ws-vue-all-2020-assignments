<template>
  <form @submit.prevent="addComment" class="discussion__form__fields">
      <div class="form-el">
        <label for="comment">Comment</label>
        <textarea name="comment" id="comment" cols="50" rows="5" v-model="text">
        </textarea>
      </div>
      <div class="form-el">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" class="input-name" v-model="author">
      </div>
      <button class="button button--black form-el">send</button>
    </form>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      author: "",
    }
  },
  methods: {
    addComment() {
      this.$emit('send', { text: this.text, author: this.author } )
    }
  }
}
</script>

<style>

</style>