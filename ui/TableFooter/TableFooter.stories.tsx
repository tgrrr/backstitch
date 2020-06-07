import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { TableFooter } from './index';

export default {
    title: 'Material TableFooter',
};

storiesOf('TableFooter', module).add('Default', () => (
    <TableFooter
        className='myClass'
    >
        <>
            TableFooter
        </>
    </TableFooter>
));
