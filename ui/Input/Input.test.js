import React from 'react'
import renderer from 'react-test-renderer'
import { Input } from '.'

it('Input: default', () => {
    const component = renderer.create(
        <Input>
            <>
                Input
            </>
        </Input>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
