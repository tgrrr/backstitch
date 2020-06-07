import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { NativeSelect } from './index';

export default {
    title: 'Material NativeSelect',
};

storiesOf('NativeSelect', module).add('Default', () => (
    <NativeSelect
        className='myClass'
    >
        <>
            NativeSelect
        </>
    </NativeSelect>
));
