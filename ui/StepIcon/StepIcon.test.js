import React from 'react'
import renderer from 'react-test-renderer'
import { StepIcon } from '.'

it('StepIcon: default', () => {
    const component = renderer.create(
        <StepIcon>
            <>
                StepIcon
            </>
        </StepIcon>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
