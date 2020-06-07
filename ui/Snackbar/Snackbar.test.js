import React from 'react'
import renderer from 'react-test-renderer'
import { Snackbar } from '.'

it('Snackbar: default', () => {
    const component = renderer.create(
        <Snackbar>
            <>
                Snackbar
            </>
        </Snackbar>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
