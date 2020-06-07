import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { NoSsr } from './index';

export default {
    title: 'Material NoSsr',
};

storiesOf('NoSsr', module).add('Default', () => (
    <NoSsr
        className='myClass'
    >
        <>
            NoSsr
        </>
    </NoSsr>
));
