import React from 'react'
import renderer from 'react-test-renderer'
import { DialogContent } from '.'

it('DialogContent: default', () => {
    const component = renderer.create(
        <DialogContent>
            <>
                DialogContent
            </>
        </DialogContent>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
