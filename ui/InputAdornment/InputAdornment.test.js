import React from 'react'
import renderer from 'react-test-renderer'
import { InputAdornment } from '.'

it('InputAdornment: default', () => {
    const component = renderer.create(
        <InputAdornment>
            <>
                InputAdornment
            </>
        </InputAdornment>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
