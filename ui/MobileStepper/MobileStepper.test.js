import React from 'react'
import renderer from 'react-test-renderer'
import { MobileStepper } from '.'

it('MobileStepper: default', () => {
    const component = renderer.create(
        <MobileStepper
            steps={5}
        >
            <>
                MobileStepper
            </>
        </MobileStepper>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
