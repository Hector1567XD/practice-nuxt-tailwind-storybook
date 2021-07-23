<template>
  <div>
    <div class="grid mt-2 md:grid-cols-2 lg:grid-cols-3">
        <article-card-block
          :article="article"
          v-for="(article) in articles"
          :key="article.id"
          class="article-card-block my-3 mx-1 md:m-3"
        />
    </div>
  </div>
</template>

<script>
  import ArticleCardBlock from '@/components/blocks/ArticleCardBlock'

  export default {
    components: {
      ArticleCardBlock
    },
    data() {
      return {
        currentPage: 1,
        articles: []
      }
    },
    async fetch() {
      const articles = await fetch(
        `https://dev.to/api/articles?tag=nuxt&state=rising&page=${this.currentPage}`
      ).then(res => res.json())

      this.articles = this.articles.concat(articles)
    }
  }
</script>