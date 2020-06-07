import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Chip } from './index';

export default {
    title: 'Material Chip',
};

storiesOf('Chip', module).add('Default', () => (
    <Chip
        className='myClass'
    >
        <>
            Chip
        </>
    </Chip>
));
