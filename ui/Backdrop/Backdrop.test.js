import React from 'react'
import renderer from 'react-test-renderer'
import { Backdrop } from '.'

it('Backdrop: default', () => {
    const component = renderer.create(
        <Backdrop>
            <>
                Backdrop
            </>
        </Backdrop>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
