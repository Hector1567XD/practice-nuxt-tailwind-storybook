<template>
  <div>
    <nuxt-link
      :to="{ 
        name: 'username-article', 
        params: { username: article.user.username, article: article.id } 
      }"
      tag="article"
    >
      <div class="bg-white shadow-md rounded overflow-hidden
            hover:shadow-lg
            group cursor-pointer"
      >
        <div class="image-wrapper">
          <img
            v-if="article.cover_image"
            :src="article.cover_image"
            :alt="article.title"
          />
          <img v-else :src="article.social_image" :alt="article.title" />
        </div>
        <div class="content p-2 h-full flex flex-col justify-between">
          <div>
            <nuxt-link
              :to="{name: 'username-article', 
              params: { username: article.user.username, article: article.id } }"
            >
              <h1 class="text-gray-900 sm:text-lg lg:text-xl font-bold group-hover:text-indigo-500">{{ article.title }}</h1>
            </nuxt-link>
            <div class="tags">
              <nuxt-link
                v-for="tag in article.tag_list"
                :key="tag"
                :to="{ name: 't-tag', params: { tag } }"
                class="text-gray-500 hover:text-indigo-400"
              >
                #{{ tag }}
              </nuxt-link>
            </div>
          </div>
          <div class="meta flex mt-2 justify-between">
            <div>
              <span class="inline-flex">
                <heart-icon />
                <span class="ml-2">
                  {{ article.positive_reactions_count }}
                </span>
              </span>
              <span class="inline-flex ml-2">
                <comments-icon />
                <span class="ml-2">
                  {{ article.comments_count }}
                </span>
              </span>
            </div>
            <time>{{ article.readable_publish_date }}</time>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
  import HeartIcon from '@/assets/icons/heart.svg?inline'
  import CommentsIcon from '@/assets/icons/comments.svg?inline'

  export default {
    components: {
      HeartIcon,
      CommentsIcon
    },
    props: {
      article: {
        type: Object,
        default: null
      }
    }
  }
</script>