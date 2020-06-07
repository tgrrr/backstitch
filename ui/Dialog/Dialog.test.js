import React from 'react'
import renderer from 'react-test-renderer'
import { Dialog } from '.'

it('Dialog: default', () => {
    const component = renderer.create(
        <Dialog>
            <>
                Dialog
            </>
        </Dialog>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
