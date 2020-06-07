import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { TableHead } from './index';

export default {
    title: 'Material TableHead',
};

storiesOf('TableHead', module).add('Default', () => (
    <TableHead
        className='myClass'
    >
        <>
            TableHead
        </>
    </TableHead>
));
