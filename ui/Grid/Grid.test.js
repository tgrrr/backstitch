import React from 'react'
import renderer from 'react-test-renderer'
import { Grid } from '.'

it('Grid: default', () => {
    const component = renderer.create(
        <Grid>
            <>
                Grid
            </>
        </Grid>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
