import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Dialog } from './index';

export default {
    title: 'Material Dialog',
};

storiesOf('Dialog', module).add('Default', () => (
    <Dialog
        className='myClass'
        open={true}
    >
        <>
            Dialog
        </>
    </Dialog>
));
