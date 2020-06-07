import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { FormLabel } from './index';

export default {
    title: 'Material FormLabel',
};

storiesOf('FormLabel', module).add('Default', () => (
    <FormLabel
        className='myClass'
    >
        <>
            FormLabel
        </>
    </FormLabel>
));
