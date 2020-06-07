import React from 'react'
import renderer from 'react-test-renderer'
import { ListItemAvatar } from '.'

it('ListItemAvatar: default', () => {
    const component = renderer.create(
        <ListItemAvatar>
            <>
                ListItemAvatar
            </>
        </ListItemAvatar>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
