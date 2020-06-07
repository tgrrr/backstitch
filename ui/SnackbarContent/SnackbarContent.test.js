import React from 'react'
import renderer from 'react-test-renderer'
import { SnackbarContent } from '.'

it('SnackbarContent: default', () => {
    const component = renderer.create(
        <SnackbarContent>
            <>
                SnackbarContent
            </>
        </SnackbarContent>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
