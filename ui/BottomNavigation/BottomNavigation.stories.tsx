import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { BottomNavigation } from './index';

export default {
    title: 'Material BottomNavigation',
};

storiesOf('BottomNavigation', module).add('Default', () => (
    <BottomNavigation
        className='myClass'
    >
        <>
            BottomNavigation
        </>
    </BottomNavigation>
));
