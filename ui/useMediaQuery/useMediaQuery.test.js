import React from 'react'
import renderer from 'react-test-renderer'
import { useMediaQuery } from '.'

it('useMediaQuery: default', () => {
    const component = renderer.create(
        <useMediaQuery>
            <>
                useMediaQuery
            </>
        </useMediaQuery>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
