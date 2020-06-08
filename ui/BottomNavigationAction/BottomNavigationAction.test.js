import React from 'react'
import renderer from 'react-test-renderer'
import { BottomNavigationAction } from '.'

it('BottomNavigationAction: default', () => {
    const component = renderer.create(
        <BottomNavigationAction />
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
