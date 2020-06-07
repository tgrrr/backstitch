import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { DialogContentText } from './index';

export default {
    title: 'Material DialogContentText',
};

storiesOf('DialogContentText', module).add('Default', () => (
    <DialogContentText
        className='myClass'
    >
        <>
            DialogContentText
        </>
    </DialogContentText>
));
