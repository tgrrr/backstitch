import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Input } from './index';

export default {
    title: 'Material Input',
};

storiesOf('Input', module).add('Default', () => (
    <Input
        className='myClass'
    >
        <>
            Input
        </>
    </Input>
));
