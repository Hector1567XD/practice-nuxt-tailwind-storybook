<template>
  <div>
    <div v-if="comments">
      <div>
        <h4 class="text-2xl my-2 font-bold">Comentarios</h4>
      </div>
      <div v-for="(comment, index) in comments" :key="index">
        <comment-block :comment="comment"/>
      </div>
    </div>
  </div>
</template>

<script>
  import CommentBlock from '@/components/blocks/CommentBlock.vue'
  export default {
    props: {
      articleId: {
        type: String,
        required: true
      }
    },
    components: {
      CommentBlock
    },
    data() {
      return {
        comments: null
      }
    },
    async fetch() {
      this.comments = await fetch(
        `https://dev.to/api/comments?a_id=${this.articleId}`
      ).then((res) => res.json())
    },
    fetchOnServer: false
  }
</script>