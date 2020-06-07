import React from 'react'
import renderer from 'react-test-renderer'
import { TableHead } from '.'

it('TableHead: default', () => {
    const component = renderer.create(
        <TableHead>
            <>
                TableHead
            </>
        </TableHead>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
