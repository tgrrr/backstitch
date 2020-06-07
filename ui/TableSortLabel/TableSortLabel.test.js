import React from 'react'
import renderer from 'react-test-renderer'
import { TableSortLabel } from '.'

it('TableSortLabel: default', () => {
    const component = renderer.create(
        <TableSortLabel>
            <>
                TableSortLabel
            </>
        </TableSortLabel>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
