import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Checkbox } from './index';

export default {
    title: 'Material Checkbox',
};

storiesOf('Checkbox', module).add('Default', () => (
    <Checkbox className='myClass' />
));
