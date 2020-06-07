import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { DialogContent } from './index';

export default {
    title: 'Material DialogContent',
};

storiesOf('DialogContent', module).add('Default', () => (
    <DialogContent
        className='myClass'
    >
        <>
            DialogContent
        </>
    </DialogContent>
));
