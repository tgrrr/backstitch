import React from 'react'
import renderer from 'react-test-renderer'
import { SwipeableDrawer } from '.'

it('SwipeableDrawer: default', () => {
    const component = renderer.create(
        <SwipeableDrawer
            onOpen={() => { }}
            onClose={() => { }}
            open={true}
        >
            <>
                SwipeableDrawer
            </>
        </SwipeableDrawer>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
