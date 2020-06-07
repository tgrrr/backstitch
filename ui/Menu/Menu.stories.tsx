import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Menu } from './index';

export default {
    title: 'Material Menu',
};

storiesOf('Menu', module).add('Default', () => (
    <Menu
        className='myClass'
    >
        <>
            Menu
        </>
    </Menu>
));
