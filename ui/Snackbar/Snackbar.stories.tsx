import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Snackbar } from './index';

export default {
    title: 'Material Snackbar',
};

storiesOf('Snackbar', module).add('Default', () => (
    <Snackbar
        className='myClass'
    >
        <>
            Snackbar
        </>
    </Snackbar>
));
