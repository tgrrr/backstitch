import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { useScrollTrigger } from './index';

export default {
    title: 'Material useScrollTrigger',
};

storiesOf('useScrollTrigger', module).add('Default', () => (
    <useScrollTrigger
        className='myClass'
    >
        <>
            useScrollTrigger
        </>
    </useScrollTrigger>
));
