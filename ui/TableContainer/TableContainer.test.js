import React from 'react'
import renderer from 'react-test-renderer'
import { TableContainer } from '.'

it('TableContainer: default', () => {
    const component = renderer.create(
        <TableContainer>
            <>
                TableContainer
            </>
        </TableContainer>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
