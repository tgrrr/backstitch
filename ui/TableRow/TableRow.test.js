import React from 'react'
import renderer from 'react-test-renderer'
import { TableRow } from '.'

it('TableRow: default', () => {
    const component = renderer.create(
        <TableRow>
            <>
                TableRow
            </>
        </TableRow>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
