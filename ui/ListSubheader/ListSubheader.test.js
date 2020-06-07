import React from 'react'
import renderer from 'react-test-renderer'
import { ListSubheader } from '.'

it('ListSubheader: default', () => {
    const component = renderer.create(
        <ListSubheader>
            <>
                ListSubheader
            </>
        </ListSubheader>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
