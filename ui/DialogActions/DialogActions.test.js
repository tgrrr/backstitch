import React from 'react'
import renderer from 'react-test-renderer'
import { DialogActions } from '.'

it('DialogActions: default', () => {
    const component = renderer.create(
        <DialogActions>
            <>
                DialogActions
            </>
        </DialogActions>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
