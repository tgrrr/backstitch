import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { TableSortLabel } from './index';

export default {
    title: 'Material TableSortLabel',
};

storiesOf('TableSortLabel', module).add('Default', () => (
    <TableSortLabel
        className='myClass'
    >
        <>
            TableSortLabel
        </>
    </TableSortLabel>
));
