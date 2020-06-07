import React from 'react'
import renderer from 'react-test-renderer'
import { Toolbar } from '.'

it('Toolbar: default', () => {
    const component = renderer.create(
        <Toolbar>
            <>
                Toolbar
            </>
        </Toolbar>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
