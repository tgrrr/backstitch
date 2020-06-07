import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { TabScrollButton } from './index';

export default {
    title: 'Material TabScrollButton',
};

storiesOf('TabScrollButton', module).add('Default', () => (
    <TabScrollButton
        className='myClass'
    >
        <>
            TabScrollButton
        </>
    </TabScrollButton>
));
