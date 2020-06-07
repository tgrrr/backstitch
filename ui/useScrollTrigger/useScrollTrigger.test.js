import React from 'react'
import renderer from 'react-test-renderer'
import { useScrollTrigger } from '.'

it('useScrollTrigger: default', () => {
    const component = renderer.create(
        <useScrollTrigger>
            <>
                useScrollTrigger
            </>
        </useScrollTrigger>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
