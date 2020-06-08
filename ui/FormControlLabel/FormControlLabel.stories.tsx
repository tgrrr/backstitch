import * as React from 'react';
import { Checkbox } from '../Checkbox';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { FormControlLabel } from './index';

export default {
    title: 'Material FormControlLabel',
};

storiesOf('FormControlLabel', module).add('Default', () => (
    <FormControlLabel
        className='myClass'
        control={<Checkbox />} 
        label='Foo'
    />
));
