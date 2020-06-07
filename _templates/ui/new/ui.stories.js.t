---
to: src/common/ui/<%= name %>/<%= name %>.stories.tsx
---
import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { <%= name %> } from './index';

export default {
    title: 'Material <%= name %>',
};

storiesOf('<%= name %>', module).add('Default', () => (
    <<%= name %>
        className='myClass'
    >
        <>
            <%= name %>
        </>
    </<%= name %>>
));
