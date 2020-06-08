import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { BottomNavigationAction } from './index';

export default {
    title: 'Material BottomNavigationAction',
};

storiesOf('BottomNavigationAction', module).add('Default', () => (
    <BottomNavigationAction className='myClass' />
));
