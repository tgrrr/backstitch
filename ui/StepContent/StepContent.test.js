import React from 'react'
import renderer from 'react-test-renderer'
import { StepContent } from '.'

const defaultProps = {
    orientation: 'vertical',
};

it('StepContent: default', () => {
    const component = renderer.create(
        <StepContent {...defaultProps} >
            <>
                StepContent
            </>
        </StepContent>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
