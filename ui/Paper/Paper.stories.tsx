import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Paper } from './index';

export default {
    title: 'Material Paper',
};

storiesOf('Paper', module).add('Default', () => (
    <Paper
        className='myClass'
    >
        <>
            Paper
        </>
    </Paper>
));
