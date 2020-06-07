import React from 'react'
import renderer from 'react-test-renderer'
import { Portal } from '.'

it('Portal: default', () => {
    const component = renderer.create(
        <Portal>
            <>
                Portal
            </>
        </Portal>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
