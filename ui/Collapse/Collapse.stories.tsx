import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Collapse } from './index';

export default {
    title: 'Material Collapse',
};

storiesOf('Collapse', module).add('Default', () => (
    <Collapse
        className='myClass'
    >
        <>
            Collapse
        </>
    </Collapse>
));
