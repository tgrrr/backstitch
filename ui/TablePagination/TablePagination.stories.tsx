import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { TablePagination } from './index';

export default {
    title: 'Material TablePagination',
};

storiesOf('TablePagination', module).add('Default', () => (
    <TablePagination
        className='myClass'
        count={20}
        onChangePage={action('Closed')}
        page={5}
        rowsPerPage={5}
    >
        <>
            TablePagination
        </>
    </TablePagination>
));
