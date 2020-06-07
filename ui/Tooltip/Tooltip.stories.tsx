import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Tooltip } from './index';

export default {
    title: 'Material Tooltip',
};

storiesOf('Tooltip', module).add('Default', () => (
    <Tooltip
        className='myClass'
    >
        <>
            Tooltip
        </>
    </Tooltip>
));
