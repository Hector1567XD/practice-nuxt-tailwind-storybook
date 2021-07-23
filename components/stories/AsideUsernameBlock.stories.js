import AsideUsernameBlock from '@/components/blocks/AsideUsernameBlock.vue';

export default {
  component: AsideUsernameBlock,
  title: 'Components/AsideUsernameBlock',
};

const Template = (args, { argTypes }) => ({
  components: { AsideUsernameBlock },
  props: Object.keys(argTypes),
  template: '<div class="max-w-xl"><AsideUsernameBlock v-bind="$props" v-on="$props" /></div>',
});

export const ExampleUser = Template.bind({});
ExampleUser.args = {
  username: 'didomarchet'
};

