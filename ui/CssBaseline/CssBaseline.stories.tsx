import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { CssBaseline } from './index';

export default {
    title: 'Material CssBaseline',
};

storiesOf('CssBaseline', module).add('Default', () => (
    <CssBaseline
        className='myClass'
    >
        <>
            CssBaseline
        </>
    </CssBaseline>
));
