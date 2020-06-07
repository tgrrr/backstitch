import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { AppBar } from './index';

export default {
    title: 'Material AppBar',
};

storiesOf('AppBar', module).add('Default', () => (
    <AppBar
        className='myClass'
    >
        <>
            AppBar
        </>
    </AppBar>
));
