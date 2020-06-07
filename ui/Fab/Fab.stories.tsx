import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Fab } from './index';

export default {
    title: 'Material Fab',
};

storiesOf('Fab', module).add('Default', () => (
    <Fab
        className='myClass'
    >
        <>
            Fab
        </>
    </Fab>
));
