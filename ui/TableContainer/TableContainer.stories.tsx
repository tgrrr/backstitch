import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { TableContainer } from './index';

export default {
    title: 'Material TableContainer',
};

storiesOf('TableContainer', module).add('Default', () => (
    <TableContainer
        className='myClass'
    >
        <>
            TableContainer
        </>
    </TableContainer>
));
