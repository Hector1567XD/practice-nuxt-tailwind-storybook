import ArticleCardBlock from '@/components/blocks/ArticleCardBlock.vue';

export default {
  component: ArticleCardBlock,
  title: 'Components/ArticleCardBlock',
};


const Template = (args, { argTypes }) => ({
  components: { ArticleCardBlock },
  props: Object.keys(argTypes),
  template: '<div class="max-w-xl"><ArticleCardBlock v-bind="$props" v-on="$props" /></div>',
});


export const ExampleArticle = Template.bind({});
ExampleArticle.args = {
  article: {"type_of":"article","id":769004,"title":"➡️ Counter Up Animation | JavaScript✨","description":"Hey DEVs, in this tutorial we're going to use JavaScript to build a visual Counting Animation.       ...","readable_publish_date":"Jul 22","slug":"counter-up-animation-javascript-b92","path":"/robsonmuniz16/counter-up-animation-javascript-b92","url":"https://dev.to/robsonmuniz16/counter-up-animation-javascript-b92","comments_count":0,"public_reactions_count":32,"collection_id":null,"published_timestamp":"2021-07-22T21:46:36Z","positive_reactions_count":32,"cover_image":null,"social_image":"https://dev.to/social_previews/article/769004.png","canonical_url":"https://dev.to/robsonmuniz16/counter-up-animation-javascript-b92","created_at":"2021-07-22T21:46:36Z","edited_at":null,"crossposted_at":null,"published_at":"2021-07-22T21:46:36Z","last_comment_at":"2021-07-22T21:46:36Z","reading_time_minutes":1,"tag_list":["html","css","javascript","webdev"],"tags":"html, css, javascript, webdev","user":{"name":"Robson Muniz","username":"robsonmuniz16","twitter_username":"RobsonMuniz16","github_username":null,"website_url":"http://www.youtube.com/c/WebDevelopment","profile_image":"https://res.cloudinary.com/practicaldev/image/fetch/s--bmJtCezl--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/543933/9634f6b1-b54c-420e-b6c3-63e15f2d0066.jpg","profile_image_90":"https://res.cloudinary.com/practicaldev/image/fetch/s--K4aHGmle--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/543933/9634f6b1-b54c-420e-b6c3-63e15f2d0066.jpg"}}
};

export const OtherExample = Template.bind({});
OtherExample.args = {
  article: {"type_of":"article","id":761722,"title":"It's alive! Simulate organisms with Conway's game of life on a canvas 🧫🔋","description":"Today, we create living organisms! We'll kind of, at least. It's the next best thing to becoming a...","readable_publish_date":"Jul 21","slug":"it-s-alive-conway-s-game-of-life-on-a-canvas-25ja","path":"/thormeier/it-s-alive-conway-s-game-of-life-on-a-canvas-25ja","url":"https://dev.to/thormeier/it-s-alive-conway-s-game-of-life-on-a-canvas-25ja","comments_count":5,"public_reactions_count":28,"collection_id":null,"published_timestamp":"2021-07-21T15:26:46Z","positive_reactions_count":28,"cover_image":"https://res.cloudinary.com/practicaldev/image/fetch/s--DF9opyZB--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zw98dztupneeudiz6kua.jpeg","social_image":"https://res.cloudinary.com/practicaldev/image/fetch/s--IpD6qskf--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zw98dztupneeudiz6kua.jpeg","canonical_url":"https://dev.to/thormeier/it-s-alive-conway-s-game-of-life-on-a-canvas-25ja","created_at":"2021-07-17T07:20:52Z","edited_at":"2021-07-21T15:54:02Z","crossposted_at":null,"published_at":"2021-07-21T15:26:46Z","last_comment_at":"2021-07-23T12:28:36Z","reading_time_minutes":7,"tag_list":["tutorial","computerscience","javascript","maths"],"tags":"tutorial, computerscience, javascript, maths","user":{"name":"Pascal Thormeier","username":"thormeier","twitter_username":"pthormeier","github_username":"thormeier","website_url":"https://thormeier.github.io/","profile_image":"https://res.cloudinary.com/practicaldev/image/fetch/s--TDfAqvoF--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/436259/00cde9af-e704-48b7-a00a-32cdc4997190.jpeg","profile_image_90":"https://res.cloudinary.com/practicaldev/image/fetch/s--ea2od0yd--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/436259/00cde9af-e704-48b7-a00a-32cdc4997190.jpeg"}}
};


