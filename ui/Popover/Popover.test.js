import React from 'react'
import renderer from 'react-test-renderer'
import { Popover } from '.'

it('Popover: default', () => {
    const component = renderer.create(
        <Popover>
            <>
                Popover
            </>
        </Popover>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
