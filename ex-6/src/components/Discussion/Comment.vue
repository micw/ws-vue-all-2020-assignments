<template>
  <div class="discussion__comment" :class="{'text-color--red': comment.setTextColor}">
    {{comment.commentText}}
  </div>
  <div class="discussion__details">
    <div class="author">{{comment.commentAuthor}} @ {{ date }}</div>
  </div>
</template>

<script>
export default {
  props: ['comment'],
  data() {
    return {
      date: new Date()
    }
  }
}
</script>

<style>

</style>