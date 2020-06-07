import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { ListItemText } from './index';

export default {
    title: 'Material ListItemText',
};

storiesOf('ListItemText', module).add('Default', () => (
    <ListItemText
        className='myClass'
    >
        <>
            ListItemText
        </>
    </ListItemText>
));
