<template>
  <div class="mt-5">
    <div>
      <h1 class="text-4xl font-bold my-2">Articulos de "{{ $route.params.tag }}"</h1>
    </div>
    <articles-grid :tag="$route.params.tag" />
  </div>
</template>

<script>
  import ArticlesGrid from '@/components/blocks/ArticlesGrid'
  export default {
    components: {
      ArticlesGrid
    }
  }
</script>