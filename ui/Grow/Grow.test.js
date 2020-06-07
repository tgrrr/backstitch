import React from 'react'
import renderer from 'react-test-renderer'
import { Grow } from '.'

it('Grow: default', () => {
    const component = renderer.create(
        <Grow>
            <>
                Grow
            </>
        </Grow>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
