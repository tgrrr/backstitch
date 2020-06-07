import React from 'react'
import renderer from 'react-test-renderer'
import { FormControlLabel } from '.'

it('FormControlLabel: default', () => {
    const component = renderer.create(
        <FormControlLabel>
            <>
                FormControlLabel
            </>
        </FormControlLabel>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
