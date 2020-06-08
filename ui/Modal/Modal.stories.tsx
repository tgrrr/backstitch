import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Modal } from './index';

export default {
    title: 'Material Modal',
};

storiesOf('Modal', module).add('Default', () => (
    <Modal
        className='myClass'
        open={true}
    >
        <>
            Modal
        </>
    </Modal>
));
