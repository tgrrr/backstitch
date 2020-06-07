import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { RadioGroup } from './index';

export default {
    title: 'Material RadioGroup',
};

storiesOf('RadioGroup', module).add('Default', () => (
    <RadioGroup
        className='myClass'
    >
        <>
            RadioGroup
        </>
    </RadioGroup>
));
