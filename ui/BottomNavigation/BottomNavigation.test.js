import React from 'react'
import renderer from 'react-test-renderer'
import { BottomNavigation } from '.'

it('BottomNavigation: default', () => {
    const component = renderer.create(
        <BottomNavigation>
            <>
                BottomNavigation
            </>
        </BottomNavigation>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
