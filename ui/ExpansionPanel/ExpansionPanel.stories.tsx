import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { ExpansionPanel } from './index';

export default {
    title: 'Material ExpansionPanel',
};

storiesOf('ExpansionPanel', module).add('Default', () => (
    <ExpansionPanel
        className='myClass'
    >
        <>
            ExpansionPanel
        </>
    </ExpansionPanel>
));
