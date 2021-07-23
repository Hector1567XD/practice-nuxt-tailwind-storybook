import ArticlesGrid from '@/components/blocks/ArticlesGrid.vue';

export default {
  component: ArticlesGrid,
  title: 'Components/ArticlesGrid',
};


const Template = (args, { argTypes }) => ({
  components: { ArticlesGrid },
  props: Object.keys(argTypes),
  template: '<ArticlesGrid v-bind="$props" v-on="$props" />',
});


export const DefaultGrid = Template.bind({});
DefaultGrid.args = {
};

export const NuxtTagGrid = Template.bind({});
NuxtTagGrid.args = {
  tag: "nuxt"
};

export const NuxtUserGrid = Template.bind({});
NuxtUserGrid.args = {
  username: "nuxt"
};


