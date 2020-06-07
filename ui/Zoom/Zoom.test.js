import React from 'react'
import renderer from 'react-test-renderer'
import { Zoom } from '.'

it('Zoom: default', () => {
    const component = renderer.create(
        <Zoom>
            <>
                Zoom
            </>
        </Zoom>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
