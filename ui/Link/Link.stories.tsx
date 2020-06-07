import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Link } from './index';

export default {
    title: 'Material Link',
};

storiesOf('Link', module).add('Default', () => (
    <Link
        className='myClass'
    >
        <>
            Link
        </>
    </Link>
));
