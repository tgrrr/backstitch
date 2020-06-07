import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Slider } from './index';

export default {
    title: 'Material Slider',
};

storiesOf('Slider', module).add('Default', () => (
    <Slider
        className='myClass'
    >
        <>
            Slider
        </>
    </Slider>
));
