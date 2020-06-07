import React from 'react'
import renderer from 'react-test-renderer'
import { Select } from '.'

it('Select: default', () => {
    const component = renderer.create(
        <Select>
            <>
                Select
            </>
        </Select>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
