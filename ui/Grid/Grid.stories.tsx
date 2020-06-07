import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Grid } from './index';

export default {
    title: 'Material Grid',
};

storiesOf('Grid', module).add('Default', () => (
    <Grid
        className='myClass'
    >
        <>
            Grid
        </>
    </Grid>
));
