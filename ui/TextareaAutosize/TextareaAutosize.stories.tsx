import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { TextareaAutosize } from './index';

export default {
    title: 'Material TextareaAutosize',
};

storiesOf('TextareaAutosize', module).add('Default', () => (
    <TextareaAutosize className='myClass' />

));
