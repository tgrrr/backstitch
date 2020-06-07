import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { StepLabel } from './index';

export default {
    title: 'Material StepLabel',
};

storiesOf('StepLabel', module).add('Default', () => (
    <StepLabel
        className='myClass'
    >
        <>
            StepLabel
        </>
    </StepLabel>
));
