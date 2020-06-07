import React from 'react'
import renderer from 'react-test-renderer'
import { Drawer } from '.'

it('Drawer: default', () => {
    const component = renderer.create(
        <Drawer>
            <>
                Drawer
            </>
        </Drawer>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
