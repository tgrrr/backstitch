import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Drawer } from './index';

export default {
    title: 'Material Drawer',
};

storiesOf('Drawer', module).add('Default', () => (
    <Drawer
        className='myClass'
    >
        <>
            Drawer
        </>
    </Drawer>
));
