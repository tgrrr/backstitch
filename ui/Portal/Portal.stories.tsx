import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Portal } from './index';

export default {
    title: 'Material Portal',
};

storiesOf('Portal', module).add('Default', () => (
    <Portal
        className='myClass'
    >
        <>
            Portal
        </>
    </Portal>
));
