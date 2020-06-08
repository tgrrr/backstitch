import React from 'react'
import renderer from 'react-test-renderer'
import { GridListTileBar } from '.'

it('GridListTileBar: default', () => {
    const component = renderer.create(
        <GridListTileBar />
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
