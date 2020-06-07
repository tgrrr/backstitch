import React from 'react'
import renderer from 'react-test-renderer'
import { DialogTitle } from '.'

it('DialogTitle: default', () => {
    const component = renderer.create(
        <DialogTitle>
            <>
                DialogTitle
            </>
        </DialogTitle>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
