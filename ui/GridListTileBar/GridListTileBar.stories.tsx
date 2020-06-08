import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { GridListTileBar } from './index';

export default {
    title: 'Material GridListTileBar',
};

storiesOf('GridListTileBar', module).add('Default', () => (
    <GridListTileBar className='myClass' />
));
