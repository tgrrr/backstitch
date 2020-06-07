import React from 'react'
import renderer from 'react-test-renderer'
import { DialogContentText } from '.'

it('DialogContentText: default', () => {
    const component = renderer.create(
        <DialogContentText>
            <>
                DialogContentText
            </>
        </DialogContentText>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
