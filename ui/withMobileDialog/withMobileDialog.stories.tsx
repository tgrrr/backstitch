import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { withMobileDialog } from './index';

export default {
    title: 'Material withMobileDialog',
};

storiesOf('withMobileDialog', module).add('Default', () => (
    <withMobileDialog
        className='myClass'
    >
        <>
            withMobileDialog
        </>
    </withMobileDialog>
));
