import React from 'react'
import renderer from 'react-test-renderer'
import { Checkbox } from '.'

it('Checkbox: default', () => {
    const component = renderer.create(
        <Checkbox>
            <>
                Checkbox
            </>
        </Checkbox>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
