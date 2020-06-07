import React from 'react'
import renderer from 'react-test-renderer'
import { FormLabel } from '.'

it('FormLabel: default', () => {
    const component = renderer.create(
        <FormLabel>
            <>
                FormLabel
            </>
        </FormLabel>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
