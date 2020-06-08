import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { FilledInput } from './index';

export default {
    title: 'Material FilledInput',
};

storiesOf('FilledInput', module).add('Default', () => (
    <FilledInput className='myClass' />
));
