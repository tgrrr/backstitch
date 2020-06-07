import React from 'react'
import renderer from 'react-test-renderer'
import { ListItemIcon } from '.'

it('ListItemIcon: default', () => {
    const component = renderer.create(
        <ListItemIcon>
            <>
                ListItemIcon
            </>
        </ListItemIcon>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
