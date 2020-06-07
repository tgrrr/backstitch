import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { IconButton } from './index';

export default {
    title: 'Material IconButton',
};

storiesOf('IconButton', module).add('Default', () => (
    <IconButton
        className='myClass'
    >
        <>
            IconButton
        </>
    </IconButton>
));
