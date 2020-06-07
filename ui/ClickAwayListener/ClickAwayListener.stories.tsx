import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { ClickAwayListener } from './index';

export default {
    title: 'Material ClickAwayListener',
};

storiesOf('ClickAwayListener', module).add('Default', () => (
    <ClickAwayListener
        className='myClass'
    >
        <>
            ClickAwayListener
        </>
    </ClickAwayListener>
));
