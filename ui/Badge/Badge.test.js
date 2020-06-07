import React from 'react'
import renderer from 'react-test-renderer'
import { Badge } from '.'

it('Badge: default', () => {
    const component = renderer.create(
        <Badge>
            <>
                Badge
            </>
        </Badge>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
