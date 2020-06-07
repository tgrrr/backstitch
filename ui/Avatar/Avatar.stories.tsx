import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Avatar } from './index';

export default {
    title: 'Material Avatar',
};

storiesOf('Avatar', module).add('Default', () => (
    <Avatar
        className='myClass'
    >
        <>
            Avatar
        </>
    </Avatar>
));
