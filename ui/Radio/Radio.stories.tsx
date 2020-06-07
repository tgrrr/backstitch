import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Radio } from './index';

export default {
    title: 'Material Radio',
};

storiesOf('Radio', module).add('Default', () => (
    <Radio
        className='myClass'
    >
        <>
            Radio
        </>
    </Radio>
));
