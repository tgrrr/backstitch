import React from 'react'
import renderer from 'react-test-renderer'
import { Fab } from '.'

it('Fab: default', () => {
    const component = renderer.create(
        <Fab>
            <>
                Fab
            </>
        </Fab>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
