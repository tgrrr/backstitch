import React from 'react'
import renderer from 'react-test-renderer'
import { Menu } from '.'

it('Menu: default', () => {
    const component = renderer.create(
        <Menu>
            <>
                Menu
            </>
        </Menu>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
