import React from 'react'
import renderer from 'react-test-renderer'
import { StepConnector } from '.'

it('StepConnector: default', () => {
    const component = renderer.create(
        <StepConnector>
            <>
                StepConnector
            </>
        </StepConnector>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
