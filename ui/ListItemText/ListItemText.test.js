import React from 'react'
import renderer from 'react-test-renderer'
import { ListItemText } from '.'

it('ListItemText: default', () => {
    const component = renderer.create(
        <ListItemText>
            <>
                ListItemText
            </>
        </ListItemText>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
