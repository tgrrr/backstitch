import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { LinearProgress } from './index';

export default {
    title: 'Material LinearProgress',
};

storiesOf('LinearProgress', module).add('Default', () => (
    <LinearProgress
        className='myClass'
    >
        <>
            LinearProgress
        </>
    </LinearProgress>
));
