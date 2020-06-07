import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Stepper } from './index';

export default {
    title: 'Material Stepper',
};

storiesOf('Stepper', module).add('Default', () => (
    <Stepper
        className='myClass'
    >
        <>
            Stepper
        </>
    </Stepper>
));
