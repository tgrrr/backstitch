import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { StepIcon } from './index';

export default {
    title: 'Material StepIcon',
};

storiesOf('StepIcon', module).add('Default', () => (
    <StepIcon
        className='myClass'
    >
        <>
            StepIcon
        </>
    </StepIcon>
));
