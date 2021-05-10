import React from 'react';
import { Story, Meta } from '@storybook/react';
import { NavLink, NavLinkProps } from 'components/link/NavLink';

export default {
  title: 'Component/NavLink',
  component: NavLink,
} as Meta;

const Template: Story<NavLinkProps> = (args) => <NavLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Play',
};

