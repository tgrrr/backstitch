import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { TableRow } from './index';

export default {
    title: 'Material TableRow',
};

storiesOf('TableRow', module).add('Default', () => (
    <TableRow
        className='myClass'
    >
        <>
            TableRow
        </>
    </TableRow>
));
