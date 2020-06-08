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
        value={false} // docs: If you don't want any selected Tab, you can set this property to false.
    >
        <>
            Tabs
        </>
    </Tabs>
));
