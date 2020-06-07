import React from 'react'
import renderer from 'react-test-renderer'
import { TabScrollButton } from '.'

it('TabScrollButton: default', () => {
    const component = renderer.create(
        <TabScrollButton>
            <>
                TabScrollButton
            </>
        </TabScrollButton>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
