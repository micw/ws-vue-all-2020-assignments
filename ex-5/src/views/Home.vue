/* eslint-disable */
<template>
  <div class="home">
    <article-single/>
    <discussion-single/>
  </div>
</template>

<script>
// @ is an alias to /src
import ArticleSingle from '@/components/ArticleSingle.vue'
import DiscussionSingle from '@/components/DiscussionSingle.vue'

export default {
  name: 'Home',
  components: {
    'article-single': ArticleSingle,
    'discussion-single': DiscussionSingle,
  },
}
</script>
