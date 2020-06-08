import React from 'react'
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import { Portal } from '.'


it('Portal: default', () => {

    const oldPortal = ReactDOM.createPortal;
    ReactDOM.createPortal = node => node

    const component = renderer.create(
        <Portal>
            <div>Bar</div>
        </Portal>
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    ReactDOM.createPortal = oldPortal;
})
