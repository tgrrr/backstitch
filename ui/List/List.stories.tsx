import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { List } from './index';

export default {
    title: 'Material List',
};

storiesOf('List', module).add('Default', () => (
    <List
        className='myClass'
    >
        <>
            List
        </>
    </List>
));
