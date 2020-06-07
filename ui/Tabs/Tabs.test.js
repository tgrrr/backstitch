import React from 'react'
import renderer from 'react-test-renderer'
import { Tabs } from '.'

it('Tabs: default', () => {
    const component = renderer.create(
        <Tabs>
            <>
                Tabs
            </>
        </Tabs>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
