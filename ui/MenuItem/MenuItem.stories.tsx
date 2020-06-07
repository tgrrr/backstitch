import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { MenuItem } from './index';

export default {
    title: 'Material MenuItem',
};

storiesOf('MenuItem', module).add('Default', () => (
    <MenuItem
        className='myClass'
    >
        <>
            MenuItem
        </>
    </MenuItem>
));
