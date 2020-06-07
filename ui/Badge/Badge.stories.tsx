import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Badge } from './index';

export default {
    title: 'Material Badge',
};

storiesOf('Badge', module).add('Default', () => (
    <Badge
        className='myClass'
    >
        <>
            Badge
        </>
    </Badge>
));
