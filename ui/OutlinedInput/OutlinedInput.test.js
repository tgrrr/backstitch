import React from 'react'
import renderer from 'react-test-renderer'
import { OutlinedInput } from '.'

it('OutlinedInput: default', () => {
    const component = renderer.create(
        <OutlinedInput>
            <>
                OutlinedInput
            </>
        </OutlinedInput>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
