import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { ExpansionPanelActions } from './index';

export default {
    title: 'Material ExpansionPanelActions',
};

storiesOf('ExpansionPanelActions', module).add('Default', () => (
    <ExpansionPanelActions
        className='myClass'
    >
        <>
            ExpansionPanelActions
        </>
    </ExpansionPanelActions>
));
