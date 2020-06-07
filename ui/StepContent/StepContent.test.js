import React from 'react'
import renderer from 'react-test-renderer'
import { StepContent } from '.'

it('StepContent: default', () => {
    const component = renderer.create(
        <StepContent>
            <>
                StepContent
            </>
        </StepContent>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
