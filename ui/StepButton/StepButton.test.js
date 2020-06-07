import React from 'react'
import renderer from 'react-test-renderer'
import { StepButton } from '.'

it('StepButton: default', () => {
    const component = renderer.create(
        <StepButton>
            <>
                StepButton
            </>
        </StepButton>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
