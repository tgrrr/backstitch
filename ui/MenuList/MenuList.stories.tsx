import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { MenuList } from './index';

export default {
    title: 'Material MenuList',
};

storiesOf('MenuList', module).add('Default', () => (
    <MenuList
        className='myClass'
    >
        <>
            MenuList
        </>
    </MenuList>
));
