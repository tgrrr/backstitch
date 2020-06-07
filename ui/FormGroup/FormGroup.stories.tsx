import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { FormGroup } from './index';

export default {
    title: 'Material FormGroup',
};

storiesOf('FormGroup', module).add('Default', () => (
    <FormGroup
        className='myClass'
    >
        <>
            FormGroup
        </>
    </FormGroup>
));
