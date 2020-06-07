import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { CardActions } from './index';

export default {
    title: 'Material CardActions',
};

storiesOf('CardActions', module).add('Default', () => (
    <CardActions
        className='myClass'
    >
        <>
            CardActions
        </>
    </CardActions>
));
