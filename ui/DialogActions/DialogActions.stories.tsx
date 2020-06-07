import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { DialogActions } from './index';

export default {
    title: 'Material DialogActions',
};

storiesOf('DialogActions', module).add('Default', () => (
    <DialogActions
        className='myClass'
    >
        <>
            DialogActions
        </>
    </DialogActions>
));
