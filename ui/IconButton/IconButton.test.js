import React from 'react'
import renderer from 'react-test-renderer'
import { IconButton } from '.'

it('IconButton: default', () => {
    const component = renderer.create(
        <IconButton>
            <>
                IconButton
            </>
        </IconButton>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
