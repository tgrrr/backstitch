import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Slide } from './index';

export default {
    title: 'Material Slide',
};

storiesOf('Slide', module).add('Default', () => (
    <Slide
        className='myClass'
    >
        <>
            Slide
        </>
    </Slide>
));
