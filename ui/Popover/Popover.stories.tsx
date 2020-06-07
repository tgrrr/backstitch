import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Popover } from './index';

export default {
    title: 'Material Popover',
};

storiesOf('Popover', module).add('Default', () => (
    <Popover
        className='myClass'
    >
        <>
            Popover
        </>
    </Popover>
));
