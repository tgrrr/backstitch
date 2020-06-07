import React from 'react'
import renderer from 'react-test-renderer'
import { Radio } from '.'

it('Radio: default', () => {
    const component = renderer.create(
        <Radio>
            <>
                Radio
            </>
        </Radio>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
