import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { GridListTile } from './index';

export default {
    title: 'Material GridListTile',
};

storiesOf('GridListTile', module).add('Default', () => (
    <GridListTile
        className='myClass'
    >
        <>
            GridListTile
        </>
    </GridListTile>
));
