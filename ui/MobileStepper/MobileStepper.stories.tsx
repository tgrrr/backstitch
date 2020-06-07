import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { MobileStepper } from './index';

export default {
    title: 'Material MobileStepper',
};

storiesOf('MobileStepper', module).add('Default', () => (
    <MobileStepper
        className='myClass'
    >
        <>
            MobileStepper
        </>
    </MobileStepper>
));
