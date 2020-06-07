import React from 'react'
import renderer from 'react-test-renderer'
import { Stepper } from '.'

it('Stepper: default', () => {
    const component = renderer.create(
        <Stepper>
            <>
                Stepper
            </>
        </Stepper>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
