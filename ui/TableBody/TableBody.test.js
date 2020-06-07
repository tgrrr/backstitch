import React from 'react'
import renderer from 'react-test-renderer'
import { TableBody } from '.'

it('TableBody: default', () => {
    const component = renderer.create(
        <TableBody>
            <>
                TableBody
            </>
        </TableBody>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
