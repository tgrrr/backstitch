import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { CircularProgress } from './index';

export default {
    title: 'Material CircularProgress',
};

storiesOf('CircularProgress', module).add('Default', () => (
    <CircularProgress className='myClass' />
));
