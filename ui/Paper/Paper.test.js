import React from 'react'
import renderer from 'react-test-renderer'
import { Paper } from '.'

it('Paper: default', () => {
    const component = renderer.create(
        <Paper>
            <>
                Paper
            </>
        </Paper>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
