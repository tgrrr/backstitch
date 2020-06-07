import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { FormControl } from './index';

export default {
    title: 'Material FormControl',
};

storiesOf('FormControl', module).add('Default', () => (
    <FormControl
        className='myClass'
    >
        <>
            FormControl
        </>
    </FormControl>
));
