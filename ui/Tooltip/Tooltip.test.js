import React from 'react'
import renderer from 'react-test-renderer'
import { Tooltip } from '.'

it('Tooltip: default', () => {
    const component = renderer.create(
        <Tooltip title='foo'>
            <>
                Tooltip
            </>
        </Tooltip>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
