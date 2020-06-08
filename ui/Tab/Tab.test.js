import React from 'react'
import renderer from 'react-test-renderer'
import { Tab } from '.'

it('Tab: default', () => {
    const component = renderer.create(
        <Tab />
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
