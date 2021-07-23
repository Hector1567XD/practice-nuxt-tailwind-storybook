<template>
    <div class="flex flex-col bg-white rounded shadow-md px-2 pt-5 pb-4 my-2">
        <div class="flex grid-cols-5 lg:grid-cols-6 pb-5">
            <div class="flex justify-start flex-col align-center pl-11 pr-12 w-48">
                <div class="flex justify-center align-center w-100">
                    <img class="rounded-full w-12" 
                        :src="comment.user.profile_image" 
                        :alt="comment.user.name" />
                </div>
                <h4 class="text-md font-bold">{{ comment.user.name }}</h4>
            </div>
            <div v-html="comment.body_html" class="flex-1 the-comment-content col-span-4 lg:col-span-5 w-100 pr-4" />
        </div>
        <div v-if="comment.children && comment.children.length" class="bg-gray-200 p-2 shadow-inner">
            <div class="flex flex-col pl-5">
                <comment-block v-for="(children, index) in comment.children"
                    :comment="children" :key="index" />
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      comment: {
        type: Object,
        required: true
      }
    },
    name: 'comment-block'
  }
</script>

<style scoped>
  .the-comment-content >>> p {
    margin-top: 0rem;
    margin-bottom: 1rem;
    font-size: 1rem;
  }
  .the-comment-content >>> img, iframe {
    display:block;
    margin: 0 auto;
  }
  .the-comment-content >>> iframe::after, img::after {
    width: 100%;
    text-align: center;
  }
  .the-comment-content >>> div.highlight::after {
    overflow-x: scroll;
  }
</style>