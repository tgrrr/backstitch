import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { TableCell } from './index';

export default {
    title: 'Material TableCell',
};

storiesOf('TableCell', module).add('Default', () => (
    <TableCell
        className='myClass'
    >
        <>
            TableCell
        </>
    </TableCell>
));
