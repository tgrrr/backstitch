import React from 'react'
import renderer from 'react-test-renderer'
import { MenuList } from '.'

it('MenuList: default', () => {
    const component = renderer.create(
        <MenuList>
            <>
                MenuList
            </>
        </MenuList>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
