import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { ListItemIcon } from './index';

export default {
    title: 'Material ListItemIcon',
};

storiesOf('ListItemIcon', module).add('Default', () => (
    <ListItemIcon
        className='myClass'
    >
        <>
            ListItemIcon
        </>
    </ListItemIcon>
));
