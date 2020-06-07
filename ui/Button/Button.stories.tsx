import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Button } from './index';

export default {
    title: 'Material Button',
};

storiesOf('Button', module).add('Default', () => (
    <Button
        className='myClass'
    >
        <>
            Button
        </>
    </Button>
));
