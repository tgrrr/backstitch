import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { FormHelperText } from './index';

export default {
    title: 'Material FormHelperText',
};

storiesOf('FormHelperText', module).add('Default', () => (
    <FormHelperText
        className='myClass'
    >
        <>
            FormHelperText
        </>
    </FormHelperText>
));
