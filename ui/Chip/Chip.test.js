import React from 'react'
import renderer from 'react-test-renderer'
import { Chip } from '.'

it('Chip: default', () => {
    const component = renderer.create(
        <Chip>
            <>
                Chip
            </>
        </Chip>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
