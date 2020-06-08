import React from 'react'
import renderer from 'react-test-renderer'
import { FilledInput } from '.'

it('FilledInput: default', () => {
    const component = renderer.create(
        <FilledInput />
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
