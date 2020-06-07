import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { OutlinedInput } from './index';

export default {
    title: 'Material OutlinedInput',
};

storiesOf('OutlinedInput', module).add('Default', () => (
    <OutlinedInput
        className='myClass'
    >
        <>
            OutlinedInput
        </>
    </OutlinedInput>
));
