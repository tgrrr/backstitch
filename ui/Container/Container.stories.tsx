import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Container } from './index';

export default {
    title: 'Material Container',
};

storiesOf('Container', module).add('Default', () => (
    <Container
        className='myClass'
    >
        <>
            Container
        </>
    </Container>
));
