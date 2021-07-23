import CommentsBlock from '@/components/blocks/CommentsBlock.vue';

export default {
  component: CommentsBlock,
  title: 'Components/CommentsBlock',
};

const Template = (args, { argTypes }) => ({
  components: { CommentsBlock },
  props: Object.keys(argTypes),
  template: '<CommentsBlock v-bind="$props" v-on="$props" />',
});

export const ExampleComments = Template.bind({});
ExampleComments.args = {
  articleId: '558041'
};

