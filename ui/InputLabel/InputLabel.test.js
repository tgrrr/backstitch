import React from 'react'
import renderer from 'react-test-renderer'
import { InputLabel } from '.'

it('InputLabel: default', () => {
    const component = renderer.create(
        <InputLabel>
            <>
                InputLabel
            </>
        </InputLabel>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
