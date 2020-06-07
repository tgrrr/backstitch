import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Popper } from './index';

export default {
    title: 'Material Popper',
};

storiesOf('Popper', module).add('Default', () => (
    <Popper
        className='myClass'
    >
        <>
            Popper
        </>
    </Popper>
));
