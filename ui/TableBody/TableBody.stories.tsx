import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { TableBody } from './index';

export default {
    title: 'Material TableBody',
};

storiesOf('TableBody', module).add('Default', () => (
    <TableBody
        className='myClass'
    >
        <>
            TableBody
        </>
    </TableBody>
));
