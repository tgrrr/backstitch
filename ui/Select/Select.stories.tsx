import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Select } from './index';

export default {
    title: 'Material Select',
};

storiesOf('Select', module).add('Default', () => (
    <Select
        className='myClass'
    >
        <>
            Select
        </>
    </Select>
));
