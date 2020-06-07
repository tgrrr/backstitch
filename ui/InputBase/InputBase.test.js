import React from 'react'
import renderer from 'react-test-renderer'
import { InputBase } from '.'

it('InputBase: default', () => {
    const component = renderer.create(
        <InputBase>
            <>
                InputBase
            </>
        </InputBase>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
