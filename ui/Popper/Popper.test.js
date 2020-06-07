import React from 'react'
import renderer from 'react-test-renderer'
import { Popper } from '.'

it('Popper: default', () => {
    const component = renderer.create(
        <Popper>
            <>
                Popper
            </>
        </Popper>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
