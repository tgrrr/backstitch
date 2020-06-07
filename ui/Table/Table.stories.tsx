import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Table } from './index';

export default {
    title: 'Material Table',
};

storiesOf('Table', module).add('Default', () => (
    <Table
        className='myClass'
    >
        <>
            Table
        </>
    </Table>
));
