import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { ButtonBase } from './index';

export default {
    title: 'Material ButtonBase',
};

storiesOf('ButtonBase', module).add('Default', () => (
    <ButtonBase
        className='myClass'
    >
        <>
            ButtonBase
        </>
    </ButtonBase>
));
