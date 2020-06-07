import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Card } from './index';

export default {
    title: 'Material Card',
};

storiesOf('Card', module).add('Default', () => (
    <Card
        className='myClass'
    >
        <>
            Card
        </>
    </Card>
));
