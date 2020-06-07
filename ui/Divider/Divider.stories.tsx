import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Divider } from './index';

export default {
    title: 'Material Divider',
};

storiesOf('Divider', module).add('Default', () => (
    <Divider
        className='myClass'
    >
        <>
            Divider
        </>
    </Divider>
));
