<template>
  <div class="mt-5">
    <div>
      <h1 class="text-4xl font-bold my-2">Articulos de "{{ $route.params.username }}"</h1>
    </div>
    <articles-grid :username="$route.params.username" />
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