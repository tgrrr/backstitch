import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { withWidth } from './index';

export default {
    title: 'Material withWidth',
};

storiesOf('withWidth', module).add('Default', () => (
    <withWidth
        className='myClass'
    >
        <>
            withWidth
        </>
    </withWidth>
));
