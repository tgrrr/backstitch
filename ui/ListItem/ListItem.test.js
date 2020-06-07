import React from 'react'
import renderer from 'react-test-renderer'
import { ListItem } from '.'

it('ListItem: default', () => {
    const component = renderer.create(
        <ListItem>
            <>
                ListItem
            </>
        </ListItem>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
