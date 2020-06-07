import React from 'react'
import renderer from 'react-test-renderer'
import { StepLabel } from '.'

it('StepLabel: default', () => {
    const component = renderer.create(
        <StepLabel>
            <>
                StepLabel
            </>
        </StepLabel>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
