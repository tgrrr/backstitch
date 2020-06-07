import React from 'react'
import renderer from 'react-test-renderer'
import { Slider } from '.'

it('Slider: default', () => {
    const component = renderer.create(
        <Slider>
            <>
                Slider
            </>
        </Slider>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
