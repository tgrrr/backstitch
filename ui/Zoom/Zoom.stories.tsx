import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Zoom } from './index';

export default {
    title: 'Material Zoom',
};

storiesOf('Zoom', module).add('Default', () => (
    <Zoom
        className='myClass'
    >
        <>
            Zoom
        </>
    </Zoom>
));
