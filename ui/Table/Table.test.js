import React from 'react'
import renderer from 'react-test-renderer'
import { Table } from '.'

it('Table: default', () => {
    const component = renderer.create(
        <Table>
            <>
                Table
            </>
        </Table>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
