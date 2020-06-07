import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { DialogTitle } from './index';

export default {
    title: 'Material DialogTitle',
};

storiesOf('DialogTitle', module).add('Default', () => (
    <DialogTitle
        className='myClass'
    >
        <>
            DialogTitle
        </>
    </DialogTitle>
));
