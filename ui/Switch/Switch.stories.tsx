import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Switch } from './index';

export default {
    title: 'Material Switch',
};

storiesOf('Switch', module).add('Default', () => (
    <Switch
        className='myClass'
    >
        <>
            Switch
        </>
    </Switch>
));
