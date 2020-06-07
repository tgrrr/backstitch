import React from 'react'
import renderer from 'react-test-renderer'
import { ListItemSecondaryAction } from '.'

it('ListItemSecondaryAction: default', () => {
    const component = renderer.create(
        <ListItemSecondaryAction>
            <>
                ListItemSecondaryAction
            </>
        </ListItemSecondaryAction>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
