import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { StepButton } from './index';

export default {
    title: 'Material StepButton',
};

storiesOf('StepButton', module).add('Default', () => (
    <StepButton
        className='myClass'
    >
        <>
            StepButton
        </>
    </StepButton>
));
