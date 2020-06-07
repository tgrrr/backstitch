import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Step } from './index';

export default {
    title: 'Material Step',
};

storiesOf('Step', module).add('Default', () => (
    <Step
        className='myClass'
    >
        <>
            Step
        </>
    </Step>
));
