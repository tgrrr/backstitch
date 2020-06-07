import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { ListItem } from './index';

export default {
    title: 'Material ListItem',
};

storiesOf('ListItem', module).add('Default', () => (
    <ListItem
        className='myClass'
    >
        <>
            ListItem
        </>
    </ListItem>
));
