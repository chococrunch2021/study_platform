import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Header, HeaderProps } from './Header';

export default {
  title: 'Component/Header',
  component: Header
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };


