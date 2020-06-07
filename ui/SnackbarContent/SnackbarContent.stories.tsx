import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { SnackbarContent } from './index';

export default {
    title: 'Material SnackbarContent',
};

storiesOf('SnackbarContent', module).add('Default', () => (
    <SnackbarContent
        className='myClass'
    >
        <>
            SnackbarContent
        </>
    </SnackbarContent>
));
