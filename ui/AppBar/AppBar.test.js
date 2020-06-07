import React from 'react'
import renderer from 'react-test-renderer'
import { AppBar } from '.'

it('AppBar: default', () => {
    const component = renderer.create(
        <AppBar>
            <>
                AppBar
            </>
        </AppBar>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
