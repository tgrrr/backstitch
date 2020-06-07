import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { ListItemAvatar } from './index';

export default {
    title: 'Material ListItemAvatar',
};

storiesOf('ListItemAvatar', module).add('Default', () => (
    <ListItemAvatar
        className='myClass'
    >
        <>
            ListItemAvatar
        </>
    </ListItemAvatar>
));
