import React from 'react'
import renderer from 'react-test-renderer'
import { TableFooter } from '.'

it('TableFooter: default', () => {
    const component = renderer.create(
        <TableFooter>
            <>
                TableFooter
            </>
        </TableFooter>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
