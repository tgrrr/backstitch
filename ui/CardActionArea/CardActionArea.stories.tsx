import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { CardActionArea } from './index';

export default {
    title: 'Material CardActionArea',
};

storiesOf('CardActionArea', module).add('Default', () => (
    <CardActionArea
        className='myClass'
    >
        <>
            CardActionArea
        </>
    </CardActionArea>
));
