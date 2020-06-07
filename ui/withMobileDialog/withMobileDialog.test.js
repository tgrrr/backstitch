import React from 'react'
import renderer from 'react-test-renderer'
import { withMobileDialog } from '.'

it('withMobileDialog: default', () => {
    const component = renderer.create(
        <withMobileDialog>
            <>
                withMobileDialog
            </>
        </withMobileDialog>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
