import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { CardContent } from './index';

export default {
    title: 'Material CardContent',
};

storiesOf('CardContent', module).add('Default', () => (
    <CardContent
        className='myClass'
    >
        <>
            CardContent
        </>
    </CardContent>
));
