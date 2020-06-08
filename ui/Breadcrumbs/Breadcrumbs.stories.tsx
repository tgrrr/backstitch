import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Breadcrumbs } from './index';

export default {
    title: 'Material Breadcrumbs',
};

storiesOf('Breadcrumbs', module).add('Default', () => (
    <Breadcrumbs
        className='myClass'
    >
        <span>
            1
        </span>
        <span>
            2
        </span>
        <span>
            3
        </span>
    </Breadcrumbs>
));
