import React from 'react'
import renderer from 'react-test-renderer'
import { SwipeableDrawer } from '.'

it('SwipeableDrawer: default', () => {
    const component = renderer.create(
        <SwipeableDrawer>
            <>
                SwipeableDrawer
            </>
        </SwipeableDrawer>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
