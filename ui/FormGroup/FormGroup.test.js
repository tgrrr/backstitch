import React from 'react'
import renderer from 'react-test-renderer'
import { FormGroup } from '.'

it('FormGroup: default', () => {
    const component = renderer.create(
        <FormGroup>
            <>
                FormGroup
            </>
        </FormGroup>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
