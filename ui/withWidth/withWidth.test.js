import React from 'react'
import renderer from 'react-test-renderer'
import { withWidth } from '.'

it('withWidth: default', () => {
    const component = renderer.create(
        <withWidth>
            <>
                withWidth
            </>
        </withWidth>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
