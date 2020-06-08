import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { SwipeableDrawer } from './index';

export default {
    title: 'Material SwipeableDrawer',
};

storiesOf('SwipeableDrawer', module).add('Default', () => (
    <SwipeableDrawer
        className='myClass'
        onClose={action('Closed')}
        onOpen={action('Opened')}
        open={true}
    >
        <>
            SwipeableDrawer
        </>
    </SwipeableDrawer>
));
