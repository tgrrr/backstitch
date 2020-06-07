import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Grow } from './index';

export default {
    title: 'Material Grow',
};

storiesOf('Grow', module).add('Default', () => (
    <Grow
        className='myClass'
    >
        <>
            Grow
        </>
    </Grow>
));
