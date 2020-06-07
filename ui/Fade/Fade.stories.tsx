import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Fade } from './index';

export default {
    title: 'Material Fade',
};

storiesOf('Fade', module).add('Default', () => (
    <Fade
        className='myClass'
    >
        <>
            Fade
        </>
    </Fade>
));
