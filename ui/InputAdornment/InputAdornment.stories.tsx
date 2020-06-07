import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { InputAdornment } from './index';

export default {
    title: 'Material InputAdornment',
};

storiesOf('InputAdornment', module).add('Default', () => (
    <InputAdornment
        className='myClass'
    >
        <>
            InputAdornment
        </>
    </InputAdornment>
));
