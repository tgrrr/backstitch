import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Toolbar } from './index';

export default {
    title: 'Material Toolbar',
};

storiesOf('Toolbar', module).add('Default', () => (
    <Toolbar
        className='myClass'
    >
        <>
            Toolbar
        </>
    </Toolbar>
));
