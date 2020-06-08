import React from 'react'
import renderer from 'react-test-renderer'
import { Modal } from '.'

it('Modal: default', () => {
    const component = renderer.create(
        <Modal
            open={true}
        >
            <>
                Modal
            </>
        </Modal>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
