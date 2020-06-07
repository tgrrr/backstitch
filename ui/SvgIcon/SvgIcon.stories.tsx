import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { SvgIcon } from './index';

export default {
    title: 'Material SvgIcon',
};

storiesOf('SvgIcon', module).add('Default', () => (
    <SvgIcon
        className='myClass'
    >
        <>
            SvgIcon
        </>
    </SvgIcon>
));
