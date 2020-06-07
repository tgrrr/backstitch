import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Tabs } from './index';

export default {
    title: 'Material Tabs',
};

storiesOf('Tabs', module).add('Default', () => (
    <Tabs
        className='myClass'
    >
        <>
            Tabs
        </>
    </Tabs>
));
