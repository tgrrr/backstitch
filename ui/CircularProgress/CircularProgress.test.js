import React from 'react'
import renderer from 'react-test-renderer'
import { CircularProgress } from '.'

it('CircularProgress: default', () => {
    const component = renderer.create(
        <CircularProgress />
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
