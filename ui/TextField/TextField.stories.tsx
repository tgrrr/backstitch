import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { TextField } from './index';

export default {
    title: 'Material TextField',
};

storiesOf('TextField', module).add('Default', () => (
    <TextField
        className='myClass'
    >
        <>
            TextField
        </>
    </TextField>
));
