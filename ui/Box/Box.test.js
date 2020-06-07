import React from 'react'
import renderer from 'react-test-renderer'
import { Box } from '.'

it('Box: default', () => {
    const component = renderer.create(
        <Box>
            <>
                Box
            </>
        </Box>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
