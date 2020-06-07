import React from 'react'
import renderer from 'react-test-renderer'
import { Slide } from '.'

it('Slide: default', () => {
    const component = renderer.create(
        <Slide>
            <>
                Slide
            </>
        </Slide>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
