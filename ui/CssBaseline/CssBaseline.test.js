import React from 'react'
import renderer from 'react-test-renderer'
import { CssBaseline } from '.'

it('CssBaseline: default', () => {
    const component = renderer.create(
        <CssBaseline>
            <>
                CssBaseline
            </>
        </CssBaseline>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
