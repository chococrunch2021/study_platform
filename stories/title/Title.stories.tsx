import React from 'react';
import { Story, Meta } from '@storybook/react';

import {Title,TitleProps } from './Title';

export default {
    title: 'Component/Title',
    component: Title,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as Meta;
  
  const Template: Story<TitleProps> = (args) => <Title {...args} />;
  
export const AlmendraTitle = Template.bind({});
AlmendraTitle.args = {
  label: 'Would you study?',
};