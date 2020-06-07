import React from 'react'
import renderer from 'react-test-renderer'
import { TextField } from '.'

it('TextField: default', () => {
    const component = renderer.create(
        <TextField>
            <>
                TextField
            </>
        </TextField>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
