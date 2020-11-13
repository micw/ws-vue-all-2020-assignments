<template>
  <div class="discussion__comment" :class="{'text-color--red': comment.setTextColor}">
    {{comment.commentText}}
  </div>
  <div class="discussion__details">
    <div class="author">{{comment.commentAuthor}}</div>
  </div>
</template>

<script>
export default {
  props: ['comment']
}
</script>

<style>

</style>