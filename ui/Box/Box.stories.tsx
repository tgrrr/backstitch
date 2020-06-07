import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Box } from './index';

export default {
    title: 'Material Box',
};

storiesOf('Box', module).add('Default', () => (
    <Box
        className='myClass'
    >
        <>
            Box
        </>
    </Box>
));
