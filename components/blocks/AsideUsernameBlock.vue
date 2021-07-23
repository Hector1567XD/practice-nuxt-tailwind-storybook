<template>
  <div class="bg-white rounded shadow-md p-5">
    <template v-if="$fetchState.pending">
      <div>
        <content-placeholders>
          <div class="flex justify-center mb-2">
            <content-placeholders-img class="rounded-full w-2/4" />
          </div>
          <div>
            <content-placeholders-heading />
          </div>
          <div class="text-justify mt-1 mb-2" >
            <content-placeholders-text :lines="2"  />
          </div>
          <div class="flex justify-center my-4">
            &nbsp;
          </div>
          <div class="flex justify-between">
            <content-placeholders-text :lines="1"  />
          </div>
        </content-placeholders>
      </div>
    </template>
    <template v-else-if="$fetchState.error">
      <p>{{ $fetchState.error.message }}</p>
    </template>
    <template v-else>
      <template v-if="user">
        <div class="flex justify-center mb-2">
              <nuxt-link
                class="mb-2 rounded-full max-w-sm lg:w-2/4 cursor-pointer overflow-hidden"
                :to="{ 
                  name: 'username', 
                  params: { username: user.username } 
                }"
              >
                        <img
                          :src="user.profile_image" :alt="user.name + 'photo'" />
              </nuxt-link>
        </div>
        <nuxt-link
          class="flex justify-center"
          :to="{ 
            name: 'username', 
            params: { username: user.username } 
          }"
        >
          <h3 class="text-xl font-bold hover:text-indigo-500">{{ user.name }}</h3>
        </nuxt-link>
        <div class="text-justify mt-1 mb-2" :v-if="user.summary">
          <div>{{ user.summary }}</div>
        </div>
        <div class="flex justify-center my-4">
          <div class="flex justify-around w-2/4">
            <a v-if="user.github_username" :href="'https://github.com/'+user.github_username" target="_blank">
              <GithubIcon/>
            </a>
            <a v-if="user.twitter_username" :href="'https://twitter.com/'+user.twitter_username" target="_blank">
              <TwitterIcon/>
            </a>
            <a v-if="user.website_url" :href="user.website_url" target="_blank">
              <WebsiteIcon/>
            </a>
          </div>
        </div>
        <div class="flex justify-between">
          <div>{{ user.location }}</div>
          <time>{{ user.joined_at }}</time>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
  import TwitterIcon  from '@/assets/icons/twitter.svg?inline'
  import WebsiteIcon  from '@/assets/icons/website.svg?inline'
  import GithubIcon   from '@/assets/icons/github.svg?inline'
  import LocationIcon from '@/assets/icons/location.svg?inline'

  export default {
    components: {
      TwitterIcon, WebsiteIcon, GithubIcon, LocationIcon
    },
    props: {
      username: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        user: null
      }
    },
    async fetch() {

      try {

        const user = await fetch(
          `https://dev.to/api/users/by_username?url=${this.username}`
        ).then((res) => res.json());

        if (user.error)
          throw new Error(user.error)
        else if (user)
          this.user = user;

      } catch (err) {
        // set status code on server
        if (process.server) {
          this.$nuxt.context.res.statusCode = 404
        }
        // throwing an error will set $fetchState.error
        throw new Error(err.message)
      }

    }
  }
</script>