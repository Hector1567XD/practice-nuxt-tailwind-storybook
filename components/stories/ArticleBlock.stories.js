import ArticleBlock from '@/components/blocks/ArticleBlock.vue';

export default {
  component: ArticleBlock,
  title: 'Components/ArticleBlock',
};

const Template = (args, { argTypes }) => ({
  components: { ArticleBlock },
  props: Object.keys(argTypes),
  template: '<ArticleBlock v-bind="$props" v-on="$props" />',
});

export const ExampleArticle = Template.bind({});
ExampleArticle.args = {
  articleId: '754704'
};

