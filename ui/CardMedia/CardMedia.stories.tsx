import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { CardMedia } from './index';

export default {
    title: 'Material CardMedia',
};

storiesOf('CardMedia', module).add('Default', () => (
    <CardMedia
        className='myClass'
    >
        <>
            CardMedia
        </>
    </CardMedia>
));
