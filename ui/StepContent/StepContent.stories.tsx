import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { StepContent } from './index';

export default {
    title: 'Material StepContent',
};

storiesOf('StepContent', module).add('Default', () => (
    <StepContent
        className='myClass'
    >
        <>
            StepContent
        </>
    </StepContent>
));
