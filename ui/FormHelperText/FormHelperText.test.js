import React from 'react'
import renderer from 'react-test-renderer'
import { FormHelperText } from '.'

it('FormHelperText: default', () => {
    const component = renderer.create(
        <FormHelperText>
            <>
                FormHelperText
            </>
        </FormHelperText>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
