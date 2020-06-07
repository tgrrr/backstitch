import React from 'react'
import renderer from 'react-test-renderer'
import { RootRef } from '.'

it('RootRef: default', () => {
    const component = renderer.create(
        <RootRef>
            <>
                RootRef
            </>
        </RootRef>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
