import React from 'react'
import renderer from 'react-test-renderer'
import { TableCell } from '.'

it('TableCell: default', () => {
    const component = renderer.create(
        <TableCell>
            <>
                TableCell
            </>
        </TableCell>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
