import React from 'react'
import renderer from 'react-test-renderer'
import { Typography } from '.'

it('Typography: default', () => {
    const component = renderer.create(
        <Typography>
            <>
                Typography
            </>
        </Typography>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
