import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { ListItemSecondaryAction } from './index';

export default {
    title: 'Material ListItemSecondaryAction',
};

storiesOf('ListItemSecondaryAction', module).add('Default', () => (
    <ListItemSecondaryAction
        className='myClass'
    >
        <>
            ListItemSecondaryAction
        </>
    </ListItemSecondaryAction>
));
