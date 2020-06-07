import React from 'react'
import renderer from 'react-test-renderer'
import { LinearProgress } from '.'

it('LinearProgress: default', () => {
    const component = renderer.create(
        <LinearProgress>
            <>
                LinearProgress
            </>
        </LinearProgress>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
