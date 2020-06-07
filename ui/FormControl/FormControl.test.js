import React from 'react'
import renderer from 'react-test-renderer'
import { FormControl } from '.'

it('FormControl: default', () => {
    const component = renderer.create(
        <FormControl>
            <>
                FormControl
            </>
        </FormControl>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
