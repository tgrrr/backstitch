import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { useMediaQuery } from './index';

export default {
    title: 'Material useMediaQuery',
};

storiesOf('useMediaQuery', module).add('Default', () => (
    <useMediaQuery
        className='myClass'
    >
        <>
            useMediaQuery
        </>
    </useMediaQuery>
));
