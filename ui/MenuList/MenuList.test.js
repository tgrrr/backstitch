import React from 'react'
import renderer from 'react-test-renderer'
import { MenuList } from '.'
import { MenuItem } from '../index'

it('MenuList: default', () => {
    const component = renderer.create(
        <MenuList>
            <MenuItem>Foo</MenuItem>
            <MenuItem>Bar</MenuItem>
        </MenuList>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
