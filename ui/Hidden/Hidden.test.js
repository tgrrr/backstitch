import React from 'react'
import renderer from 'react-test-renderer'
import { Hidden } from '.'

it('Hidden: default', () => {
    const component = renderer.create(
        <Hidden>
            <>
                Hidden
            </>
        </Hidden>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
