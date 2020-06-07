import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { ListSubheader } from './index';

export default {
    title: 'Material ListSubheader',
};

storiesOf('ListSubheader', module).add('Default', () => (
    <ListSubheader
        className='myClass'
    >
        <>
            ListSubheader
        </>
    </ListSubheader>
));
