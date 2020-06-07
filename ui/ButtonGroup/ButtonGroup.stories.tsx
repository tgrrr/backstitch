import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { ButtonGroup } from './index';

export default {
    title: 'Material ButtonGroup',
};

storiesOf('ButtonGroup', module).add('Default', () => (
    <ButtonGroup
        className='myClass'
    >
        <>
            ButtonGroup
        </>
    </ButtonGroup>
));
