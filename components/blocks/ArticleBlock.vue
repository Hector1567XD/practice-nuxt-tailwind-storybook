<template>
  <div class="bg-white shadow-md p-5 rounded">
    <template v-if="$fetchState.pending">
      <div>
        <content-placeholders>
          <content-placeholders-heading class="text-4xl font-bold mb-2 mt-1"  />
          <content-placeholders-text :lines="15" class="my-2"  />
          <content-placeholders-img  class="my-2" />
          <content-placeholders-text :lines="30" class="my-2"  />
          <content-placeholders-text :lines="5" class="my-2"  />
          <content-placeholders-img  class="my-2" />
          <content-placeholders-text :lines="25" class="my-2"  />
        </content-placeholders>
      </div>
    </template>
    <template v-else-if="$fetchState.error">
      <p>{{ $fetchState.error.message }}</p>
    </template>
    <template v-else>
      <div>
        <h1 class="text-4xl font-bold mb-2 mt-1">
          {{ article.title }}
        </h1>
      </div>
      <div v-html="article.body_html" class="the-content" />
    </template>
  </div>
</template>

<script>
  export default {
    props: {
      articleId: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        article: null
      }
    },
    async fetch() {

      try {

        const article = await fetch(
          `https://dev.to/api/articles/${this.articleId}`
        ).then((res) => res.json());

        if (article.error)
          throw new Error(article.error)
        else if (article)
          this.article = article;

      } catch (err) {
        // set status code on server
        if (process.server) {
          this.$nuxt.context.res.statusCode = 404
        }
        // throwing an error will set $fetchState.error
        throw new Error(err.message)
      }

    },
    activated() {
        if (this.$fetchState.timestamp <= Date.now() - 60000) {
          this.$fetch()
        }
    }
  }
</script>

<style scoped>
  .the-content >>> p {
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    font-size: 1.10rem;
  }
  .the-content >>> img, iframe {
    display:block;
    margin: 0 auto;
  }
  .the-content >>> iframe::after, img::after {
    width: 100%;
    text-align: center;
  }
</style>