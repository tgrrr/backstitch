import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { GridList } from './index';

export default {
    title: 'Material GridList',
};

storiesOf('GridList', module).add('Default', () => (
    <GridList
        className='myClass'
    >
        <>
            GridList
        </>
    </GridList>
));
