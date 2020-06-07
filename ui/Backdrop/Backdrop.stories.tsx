import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Backdrop } from './index';

export default {
    title: 'Material Backdrop',
};

storiesOf('Backdrop', module).add('Default', () => (
    <Backdrop
        className='myClass'
    >
        <>
            Backdrop
        </>
    </Backdrop>
));
