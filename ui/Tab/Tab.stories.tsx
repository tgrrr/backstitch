import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Tab } from './index';

export default {
    title: 'Material Tab',
};

storiesOf('Tab', module).add('Default', () => (
    <Tab className='myClass' />
));
