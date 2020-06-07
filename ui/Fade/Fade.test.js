import React from 'react'
import renderer from 'react-test-renderer'
import { Fade } from '.'

it('Fade: default', () => {
    const component = renderer.create(
        <Fade>
            <>
                Fade
            </>
        </Fade>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
