import React from 'react'
import renderer from 'react-test-renderer'
import { Tooltip } from '.'

it('Tooltip: default', () => {
    const component = renderer.create(
        <Tooltip>
            <>
                Tooltip
            </>
        </Tooltip>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
