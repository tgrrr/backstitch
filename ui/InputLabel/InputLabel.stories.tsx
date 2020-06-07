import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { InputLabel } from './index';

export default {
    title: 'Material InputLabel',
};

storiesOf('InputLabel', module).add('Default', () => (
    <InputLabel
        className='myClass'
    >
        <>
            InputLabel
        </>
    </InputLabel>
));
