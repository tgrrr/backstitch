import React from 'react'
import renderer from 'react-test-renderer'
import { TablePagination } from '.'

it('TablePagination: default', () => {
    const component = renderer.create(
        <TablePagination>
            <>
                TablePagination
            </>
        </TablePagination>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
