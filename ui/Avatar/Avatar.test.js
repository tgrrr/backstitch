import React from 'react'
import renderer from 'react-test-renderer'
import { Avatar } from '.'

it('Avatar: default', () => {
    const component = renderer.create(
        <Avatar>
            <>
                Avatar
            </>
        </Avatar>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
