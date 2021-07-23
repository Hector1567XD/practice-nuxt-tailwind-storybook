<template>
    <div>
        <template v-if="$fetchState.pending">
            <div class="grid gap-3 md:gap-5 md:grid-cols-2 lg:grid-cols-3 mt-5">
                <content-placeholders
                v-for="p in 30"
                :key="p"
                rounded
                >
                <content-placeholders-img />
                <content-placeholders-text :lines="3" />
                </content-placeholders>
            </div>
        </template>
        <template v-else-if="$fetchState.error">
            <p>{{ $fetchState.error.message }}</p>
        </template>
        <template v-else>
            <div class="grid gap-3 md:gap-5 md:grid-cols-2 lg:grid-cols-3 mt-5">
                <article-card-block
                    :article="article"
                    v-for="(article, index) in articles"
                    :key="article.id"
                    v-observe-visibility="(isVisible) => lazyLoadArticles(index, isVisible)"
                    class="article-card-block "
                />
            </div>
        </template>
    </div>
</template>

<script>
  import ArticleCardBlock from '@/components/blocks/ArticleCardBlock'
  const MAX_LOAD_PAGES = 5;
  const MAX_PER_PAGE = 30;

  export default {
    components: {
      ArticleCardBlock
    },
    props: {
        tag: {
            type: String,
            default: null
        },
        username: {
            type: String,
            default: null
        }
    },
    data() {
      return {
        currentPage: 1,
        articles: [],
        canLoadMore: true
      }
    },
    async fetch() {
        
        let url = `https://dev.to/api/articles?state=rising&page=${this.currentPage}`;
        if (this.tag) 
            url += `&tag=${this.tag}`;
        if (this.username) 
            url += `&username=${this.username}`; 

        const articles = await fetch(url).then(res => res.json())
        this.articles = this.articles.concat(articles);
        // Si llegaron menos de la cantidad de articulos por pagina, significa que no hay mas paginas que cargar
        if (articles.length < MAX_PER_PAGE) this.canLoadMore = false;

    },
    methods: {
      lazyLoadArticles(index, isVisible) {
        // Si es el ultimo articulo y ademas es visible (ademas, si es que existen mas articulos que cargar)
        if (index === this.articles.length - 1 && isVisible && this.canLoadMore) {
          // Si no se ha alcanzado el maximo de paginas
          if (this.currentPage < MAX_LOAD_PAGES) {
            this.currentPage++
            this.$fetch()
          }
        }
      }
    }
  }
</script>