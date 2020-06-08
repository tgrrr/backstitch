import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { InputBase } from './index';

export default {
    title: 'Material InputBase',
};

storiesOf('InputBase', module).add('Default', () => (
    <InputBase className='myClass' />
));
