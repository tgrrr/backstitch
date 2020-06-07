import React from 'react'
import renderer from 'react-test-renderer'
import { MenuItem } from '.'

it('MenuItem: default', () => {
    const component = renderer.create(
        <MenuItem>
            <>
                MenuItem
            </>
        </MenuItem>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
