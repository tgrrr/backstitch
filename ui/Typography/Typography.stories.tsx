import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Typography } from './index';

export default {
    title: 'Material Typography',
};

storiesOf('Typography', module).add('Default', () => (
    <Typography
        className='myClass'
    >
        <>
            Typography
        </>
    </Typography>
));
