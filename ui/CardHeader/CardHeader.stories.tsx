import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { CardHeader } from './index';

export default {
    title: 'Material CardHeader',
};

storiesOf('CardHeader', module).add('Default', () => (
    <CardHeader
        className='myClass'
    >
        <>
            CardHeader
        </>
    </CardHeader>
));
