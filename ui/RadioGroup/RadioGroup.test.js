import React from 'react'
import renderer from 'react-test-renderer'
import { RadioGroup } from '.'

it('RadioGroup: default', () => {
    const component = renderer.create(
        <RadioGroup>
            <>
                RadioGroup
            </>
        </RadioGroup>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
