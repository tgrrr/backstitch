import React from 'react'
import renderer from 'react-test-renderer'
import { List } from '.'

it('List: default', () => {
    const component = renderer.create(
        <List>
            <>
                List
            </>
        </List>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
