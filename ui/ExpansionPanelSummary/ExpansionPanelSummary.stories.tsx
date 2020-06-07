import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { ExpansionPanelSummary } from './index';

export default {
    title: 'Material ExpansionPanelSummary',
};

storiesOf('ExpansionPanelSummary', module).add('Default', () => (
    <ExpansionPanelSummary
        className='myClass'
    >
        <>
            ExpansionPanelSummary
        </>
    </ExpansionPanelSummary>
));
