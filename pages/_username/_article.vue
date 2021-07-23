<template>
  <div>
    <div class="grid gap-2 grid-cols-4">
      <article-block  :article-id="$route.params.article" 
                      class="col-span-4 lg:col-span-3" />
      <div class="col-span-4 lg:col-span-1">
        <aside-username-block :username="$route.params.username" 
                              class="p-5" />
      </div>
    </div>
    <comments-block :article-id="$route.params.article" 
                    class="my-3" />
  </div>
</template>

<script>
  import ArticleBlock from '@/components/blocks/ArticleBlock'
  import CommentsBlock from '@/components/blocks/CommentsBlock'
  import AsideUsernameBlock from '@/components/blocks/AsideUsernameBlock'

  /*  Estos componentes no cumplen 
      con ser stateless 
    */

  export default {
    components: {
      ArticleBlock,
      CommentsBlock,
      AsideUsernameBlock
    },
    head () {
      return {
        link: [
          // Estilos de dev.to para su contenido
          { rel:"stylesheet", type:"text/css", href:'https://dev.to/assets/crayons-77000e247a5569787f7b0a9939fb3237ca8bbe7f67a458bb2a57b9c7d287948c.css' }
        ]
      }
    }
  }
</script>