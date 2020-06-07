import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { StepConnector } from './index';

export default {
    title: 'Material StepConnector',
};

storiesOf('StepConnector', module).add('Default', () => (
    <StepConnector
        className='myClass'
    >
        <>
            StepConnector
        </>
    </StepConnector>
));
