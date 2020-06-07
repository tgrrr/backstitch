import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { ExpansionPanelDetails } from './index';

export default {
    title: 'Material ExpansionPanelDetails',
};

storiesOf('ExpansionPanelDetails', module).add('Default', () => (
    <ExpansionPanelDetails
        className='myClass'
    >
        <>
            ExpansionPanelDetails
        </>
    </ExpansionPanelDetails>
));
