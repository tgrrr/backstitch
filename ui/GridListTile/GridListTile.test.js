import React from 'react'
import renderer from 'react-test-renderer'
import { GridListTile } from '.'

it('GridListTile: default', () => {
    const component = renderer.create(
        <GridListTile>
            <>
                GridListTile
            </>
        </GridListTile>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
