import React from 'react'
import renderer from 'react-test-renderer'
import { GridList } from '.'

it('GridList: default', () => {
    const component = renderer.create(
        <GridList>
            GridList
        </GridList>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
