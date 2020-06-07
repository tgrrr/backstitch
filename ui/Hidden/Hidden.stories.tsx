import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Hidden } from './index';

export default {
    title: 'Material Hidden',
};

storiesOf('Hidden', module).add('Default', () => (
    <Hidden
        className='myClass'
    >
        <>
            Hidden
        </>
    </Hidden>
));
