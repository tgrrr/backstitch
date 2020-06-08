import React from 'react'
import renderer from 'react-test-renderer'
import { Step } from '.'

it('Step: default', () => {
    const component = renderer.create(
        <Step>
            <span>
                Step
            </span>
        </Step>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
